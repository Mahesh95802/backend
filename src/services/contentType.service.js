const { ContentType, ContentSchema } = require('../models');

const sequelize = require('sequelize');

const getAllContentTypes = async (id) => {
	return await ContentType.findAll({
		where: { userId: id },
		attributes: ['id', 'name'],
		include: [{
			model: ContentSchema,
			attributes: ['id'],
			required: false,
		}]
	});
};

const postContentType = async (body) => {
	return await ContentType.create(body);
};

const putContentType = async (body, contentTypeId, userId) => {
	return await ContentType.update(body, {
		where: { id: contentTypeId, userId: userId },
		returning: true,
	});
};

module.exports = { getAllContentTypes, postContentType, putContentType };
