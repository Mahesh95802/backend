const collectionRouter = require('express').Router();

const collectionController = require('../controllers/collection.controller');
const collectionValidator = require('../middlewares/collection.validator');

collectionRouter.get('/content-types/:contentTypeId', collectionValidator.getAllCollectionsValidator, collectionController.getAllCollections);
collectionRouter.post('/content-types/:contentTypeId', collectionValidator.postCollectionValidator, collectionController.postCollection);
collectionRouter.put('/:collectionId', collectionValidator.editCollectionValidator, collectionController.editCollection);
collectionRouter.delete('/:collectionId', collectionValidator.deleteCollectionValidator, collectionController.deleteCollection);

module.exports = collectionRouter;