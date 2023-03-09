const { ContentSchema } = require('../models');

const getContentTypeSchema = async (contentTypeId, userId) => {
	return await ContentSchema.findAll({
		where: { contentTypeId: contentTypeId, userId: userId },
		attributes: ['id', 'fieldName', 'fieldType'],
	});
};

const postContentTypeSchema = async (body, userId, contentTypeId) => {
	return await ContentSchema.create({
		fieldName: body.fieldName,
		userId: userId,
		contentTypeId: contentTypeId,
	});
};

module.exports = { getContentTypeSchema, postContentTypeSchema };