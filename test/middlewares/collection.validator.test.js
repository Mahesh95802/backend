/* eslint-disable no-undef */
const collectionValidator = require('../../src/middlewares/collection.validator');

describe('collection validator', () => {
	describe('getCollection', () => {
		it('should call next when collectionId is valid', async () => {
			const mockReq = {
				params: { contentTypeId: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await collectionValidator.getAllCollectionsValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when collectionId is invalid', async () => {
			const mockReq = {
				params: { contentTypeId: 'a' }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await collectionValidator.getAllCollectionsValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
	describe('createCollection', () => {
		it('should call next when name is valid', async () => {
			const mockReq = {
				body: [{ contentSchemaId: 1, value: 'test' }]
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await collectionValidator.postCollectionValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when name is invalid', async () => {
			const mockReq = {
				body: [{ id: 'a', fieldName: 'test' }]
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await collectionValidator.postCollectionValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
	describe('editCollection', () => {
		it('should call next when name is valid', async () => {
			const mockReq = {
				body: [{ contentSchemaId: 1, value: 'test' }]
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await collectionValidator.editCollectionValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when name is invalid', async () => {
			const mockReq = {
				body: [{ id: 'a', fieldName: 'test' }]
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await collectionValidator.editCollectionValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
	describe('deleteCollection', () => {
		it('should call next when collectionId is valid', async () => {
			const mockReq = {
				params: { collectionId: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await collectionValidator.deleteCollectionValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when collectionId is invalid', async () => {
			const mockReq = {
				params: { collectionId: 'a' }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await collectionValidator.deleteCollectionValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
});
