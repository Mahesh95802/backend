const Joi = require('joi');

const getAllContentTypesSchema = Joi.object({
	id: Joi.number().required()
});

const postContentTypeSchema = Joi.object({
	name: Joi.string().required()
});

const putContentTypeSchema = Joi.object({
	name: Joi.string().required(),
	contentTypeId: Joi.number().required()
});

const getAllContentTypesValidator = (req, res, next) => {
	const { error } = getAllContentTypesSchema.validate(req.user);
	if(error) return res.status(400).json({ error: error.message });
	next();
};

const postContentTypeValidator = (req, res, next) => {
	const { error } = postContentTypeSchema.validate(req.body);
	if(error) return res.status(400).json({ error: error.message });
	next();
};

const putContentTypeValidator = (req, res, next) => {
	const { error } = putContentTypeSchema.validate({name: req.body.name, contentTypeId: req.params.contentTypeId});
	if(error) return res.status(400).json({ error: error.message });
	next();
};

module.exports = { postContentTypeValidator, getAllContentTypesValidator, putContentTypeValidator };