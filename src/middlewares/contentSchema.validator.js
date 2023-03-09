const Joi = require('joi');

const getContentTypeSchemaSchema = Joi.object({
	contentTypeId: Joi.number().required()
});

const postContentTypeSchemaSchema = Joi.object({
	params: Joi.object({
		contentTypeId: Joi.number().required()
	}),
	body: Joi.object({
		fieldName: Joi.string().required(),
	})
});

const getContentTypeSchemaValidator = (req, res, next) => {
	const { error } = getContentTypeSchemaSchema.validate(req.params);
	if(error) return res.status(400).json({ error: error.message });
	next();
};

const postContentTypeSchemaValidator = (req, res, next) => {
	const { error } = postContentTypeSchemaSchema.validate({ params: req.params, body: req.body });
	if(error) return res.status(400).json({ error: error.message });
	next();
};

module.exports = { getContentTypeSchemaValidator, postContentTypeSchemaValidator };