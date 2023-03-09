const contentSchemaService = require('../services/contentSchema.service');
const HTTPError = require('../errors/HTTPError');

const getContentTypeSchema = async (req, res) => {
	try{
		console.log(req.params);
		const response = await contentSchemaService.getContentTypeSchema(req.params.contentTypeId, req.user.id);
		res.status(200).json(response);
	} catch(error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

const postContentTypeSchema = async (req, res) => {
	try{
		const response = await contentSchemaService.postContentTypeSchema(req.body, req.user.id, req.params.contentTypeId);
		res.status(200).json(response);
	} catch(error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getContentTypeSchema, postContentTypeSchema };