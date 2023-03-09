const contentTypeRouter = require('express').Router();

const contentTypeController = require('../controllers/contentType.controller');
const contentTypeValidator = require('../middlewares/contentType.validator');

contentTypeRouter.get('/', contentTypeValidator.getAllContentTypesValidator, contentTypeController.getAllContentTypes);
contentTypeRouter.post('/', contentTypeValidator.postContentTypeValidator, contentTypeController.postContentType);
contentTypeRouter.put('/:contentTypeId', contentTypeValidator.putContentTypeValidator, contentTypeController.putContentType);

module.exports = contentTypeRouter;