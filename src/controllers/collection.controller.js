const collectionService = require('../services/collection.service');
const HTTPError = require('../errors/HTTPError');

const getAllCollections = async (req, res) => {
	try{
		const response = await collectionService.getAllCollections(req.params.contentTypeId, req.user.id);
		res.status(200).json(response);
	} catch(error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

const postCollection = async (req, res) => {
	try{
		const response = await collectionService.postCollection(req.body, req.params.contentTypeId, req.user.id);
		res.status(201).json(response);
	} catch(error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

const editCollection = async (req, res) => {
	try{
		const response = await collectionService.editCollection(req.body, req.params.collectionId, req.user.id);
		res.status(200).json(response);
	} catch(error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

const deleteCollection = async (req, res) => {
	try{
		const response = await collectionService.deleteCollection(req.params.collectionId, req.user.id);
		res.status(200).json(response);
	} catch(error) {
		if(error instanceof HTTPError) return res.status(error.statusCode).json({ error: error.message });
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getAllCollections, postCollection, editCollection, deleteCollection };