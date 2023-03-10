const { ContentSchema, CollectionValue } = require('../models');
const HTTPError = require('../errors/HTTPError');

const getContentTypeSchema = async (contentTypeId, userId) => {
	return await ContentSchema.findAll({
		where: { contentTypeId: contentTypeId, userId: userId },
		attributes: ['id', 'fieldName', 'fieldType'],
		order: [['updatedAt', 'DESC']],
	});
};

const postContentTypeSchema = async (body, userId, contentTypeId) => {
	return await ContentSchema.create({
		fieldName: body.fieldName,
		userId: userId,
		contentTypeId: contentTypeId,
	});
};

const putContentTypeSchema = async (body, userId, contentSchemaId) => {
	const isFieldUsed = await CollectionValue.findAndCountAll({
		where: { contentSchemaId: contentSchemaId },
	});
	console.log(isFieldUsed);
	if(isFieldUsed.count > 0) throw new HTTPError(400, 'Field is already used in a collection');
	return await ContentSchema.update({
		fieldName: body.fieldName,
	}, {
		where: { id: contentSchemaId, userId: userId },
		returning: true,
	});
};

const deleteContentTypeSchema = async (contentSchemaId, userId) => {
	return await ContentSchema.destroy({
		where: { id: contentSchemaId, userId: userId },
	});
};

module.exports = { getContentTypeSchema, postContentTypeSchema, putContentTypeSchema, deleteContentTypeSchema };