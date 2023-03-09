const contentSchemaRouter = require('express').Router();

const contentSchemeController = require('../controllers/contentSchema.controller');
const contentSchemaValidator = require('../middlewares/contentSchema.validator');

contentSchemaRouter.get('/:contentTypeId', contentSchemaValidator.getContentTypeSchemaValidator, contentSchemeController.getContentTypeSchema);
contentSchemaRouter.post('/:contentTypeId', contentSchemaValidator.postContentTypeSchemaValidator, contentSchemeController.postContentTypeSchema);

module.exports = contentSchemaRouter;