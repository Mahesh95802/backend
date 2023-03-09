const contentSchemaRouter = require('express').Router();

const contentSchemeController = require('../controllers/contentSchema.controller');
const contentSchemaValidator = require('../middlewares/contentSchema.validator');

contentSchemaRouter.get('/content-types/:contentTypeId', contentSchemaValidator.getContentTypeSchemaValidator, contentSchemeController.getContentTypeSchema);
contentSchemaRouter.post('/content-types/:contentTypeId', contentSchemaValidator.postContentTypeSchemaValidator, contentSchemeController.postContentTypeSchema);
contentSchemaRouter.put('/:contentSchemaId', contentSchemaValidator.putContentTypeSchemaValidator, contentSchemeController.putContentTypeSchema);
contentSchemaRouter.delete('/:contentSchemaId', contentSchemaValidator.deleteContentTypeSchemaValidator, contentSchemeController.deleteContentTypeSchema);


module.exports = contentSchemaRouter;