const Joi = require('joi');

const getAllCollectionsSchema = Joi.object({
	contentTypeId: Joi.number().required()
});

const postCollectionSchema = Joi.object({
	params: Joi.object({
		contentTypeId: Joi.number().required()
	}),
	body: Joi.array().items(Joi.object({
		contentSchemaId: Joi.number().required(),
		value: Joi.string().required()
	}))
});

const editCollectionSchema = Joi.object({
	params: Joi.object({
		collectionId: Joi.number().required()
	}),
	body: Joi.array().items(Joi.object({
		contentSchemaId: Joi.number().required(),
		value: Joi.string().required()
	}))
});

const deleteCollectionSchema = Joi.object({
	collectionId: Joi.number().required()
});

const getAllCollectionsValidator = (req, res, next) => {
	const { error } = getAllCollectionsSchema.validate(req.params);
	if(error) return res.status(400).json({ error: error.message });
	next();
};

const postCollectionValidator = (req, res, next) => {
	const { error } = postCollectionSchema.validate({ params: req.params, body: req.body });
	if(error) return res.status(400).json({ error: error.message });
	next();
};

const editCollectionValidator = (req, res, next) => {
	const { error } = editCollectionSchema.validate({ params: req.params, body: req.body });
	if(error) return res.status(400).json({ error: error.message });
	next();
};

const deleteCollectionValidator = (req, res, next) => {
	const { error } = deleteCollectionSchema.validate(req.params);
	if(error) return res.status(400).json({ error: error.message });
	next();
};

module.exports = { getAllCollectionsValidator, postCollectionValidator, editCollectionValidator, deleteCollectionValidator };