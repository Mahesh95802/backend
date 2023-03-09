const { Collection, CollectionValue } = require('../models');

const getAllCollections = async (contentTypeId, userId) => {
	return await Collection.findAll({
		where: { contentTypeId: contentTypeId, userId: userId },
		attributes: ['id'],
		include: [{
			model: CollectionValue,
			attributes: ['id', 'value'],
			required: false,
		}]
	});
};

const postCollection = async (body, contentTypeId, userId) => {
	const createdCollection = await Collection.create({
		contentTypeId: contentTypeId,
		userId: userId,
	});
	const createdCollectionValues = await CollectionValue.bulkCreate(body.map((value) => {
		return {
			...value,
			collectionId: createdCollection.id,
			userId: userId,
		};
	}));
	return { collection: createdCollection, collectionValues: createdCollectionValues };
};

const editCollection = async (body, collectionId, userId) => {
	await CollectionValue.destroy({
		where: { collectionId: collectionId, userId: userId },
	});
	const createdCollectionValues = await CollectionValue.bulkCreate(body.map((value) => {
		return {
			...value,
			collectionId: collectionId,
			userId: userId,
		};
	}));
	return { collectionValues: createdCollectionValues };
};

const deleteCollection = async (collectionId, userId) => {
	return await Collection.destroy({
		where: { id: collectionId, userId: userId },
	});
};


module.exports = { getAllCollections, postCollection, editCollection, deleteCollection };