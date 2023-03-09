const HTTPError = require('../errors/HTTPError');
const contentTypeService = require('../services/contentType.service');

const getAllContentTypes = async (req, res) => {
	try{
		const response = await contentTypeService.getAllContentTypes(req.user.id);
		res.status(200).json(response);
	} catch (error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

const postContentType = async (req, res) => {
	try{
		const response = await contentTypeService.postContentType({
			name: req.body.name,
			userId: req.user.id
		});
		res.status(200).json(response);
	} catch (error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

const putContentType = async (req, res) => {
	try{
		const response = await contentTypeService.putContentType(req.body, req.params.contentTypeId, req.user.id);
		res.status(200).json(response);
	} catch (error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getAllContentTypes, postContentType, putContentType };