/* eslint-disable no-undef */
const collectionService = require('../../src/services/collection.service'); 

const { Collection, CollectionValue } = require('../../src/models');

describe('Collection Service', () => {
	describe('getAllCollections', () => {
		it('should return all collections', async () => {
			jest.spyOn(Collection, 'findAll').mockResolvedValue([{ id: 1 }, { id: 2 }]);
			const result = await collectionService.getAllCollections(1, 1);
			expect(result).toEqual([{ id: 1 }, { id: 2 }]);
		});
		it('should return an Error if DB Error', async () => {
			jest.spyOn(Collection, 'findAll').mockRejectedValue(new Error('DB Error'));
			await expect(collectionService.getAllCollections(1, 1)).rejects.toThrow('DB Error');
		});
	});
	describe('postCollection', () => {
		it('should return a collection', async () => {
			jest.spyOn(Collection, 'create').mockResolvedValue({ id: 1 });
			jest.spyOn(CollectionValue, 'bulkCreate').mockResolvedValue([{ id: 1 }]);
			const result = await collectionService.postCollection([{ id: 1 }], 1, 1);
			expect(result).toEqual({ collection: { id: 1 }, collectionValues: [{ id: 1 }] });
		});
		it('should return an Error if DB Error', async () => {
			jest.spyOn(Collection, 'create').mockRejectedValue(new Error('DB Error'));
			await expect(collectionService.postCollection([{ id: 1 }], 1, 1)).rejects.toThrow('DB Error');
		});
	});
	describe('editCollection', () => {
		it('should return a edited collection Values', async () => {
			jest.spyOn(CollectionValue, 'destroy').mockResolvedValue();
			jest.spyOn(CollectionValue, 'bulkCreate').mockResolvedValue([{ id: 1 }]);
			const result = await collectionService.editCollection([{ id: 1 }], 1, 1);
			expect(result).toEqual({ collectionValues: [{ id: 1 }] });
		});
		it('should return an Error if DB Error', async () => {
			jest.spyOn(CollectionValue, 'destroy').mockRejectedValue(new Error('DB Error'));
			await expect(collectionService.editCollection([{ id: 1 }], 1, 1)).rejects.toThrow('DB Error');
		});
	});
	describe('deleteCollection', () => {
		it('should return a deleted collection', async () => {
			jest.spyOn(Collection, 'destroy').mockResolvedValue(1);
			const result = await collectionService.deleteCollection(1, 1);
			expect(result).toEqual(1);
		});
		it('should return an Error if DB Error', async () => {
			jest.spyOn(Collection, 'destroy').mockRejectedValue(new Error('DB Error'));
			await expect(collectionService.deleteCollection(1, 1)).rejects.toThrow('DB Error');
		});
	});
});