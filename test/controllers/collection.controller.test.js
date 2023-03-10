const collectionController = require('../../src/controllers/collection.controller');
const collectionService = require('../../src/services/collection.service');
const HTTPError = require('../../src/errors/HTTPError');

describe('Collection Controller', () => {
	describe('getAllCollections', () => {
		it('should return all collections', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'getAllCollections').mockResolvedValue({ message: 'success' });
			await collectionController.getAllCollections(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(200);
		});
		it('should throw an HTTPError when ', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'getAllCollections').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await collectionController.getAllCollections(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
		it('should throw an 500 Error when service throw Error', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'getAllCollections').mockRejectedValue(new Error('Internal Server Error'));
			await collectionController.getAllCollections(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
	describe('postCollection', () => {
		it('should create a collection', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'postCollection').mockResolvedValue({ message: 'success' });
			await collectionController.postCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(201);
		});
		it('should throw an HTTPError when service throws HTTPError', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'postCollection').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await collectionController.postCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
		it('should throw an 500 Error when service throw Error', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'postCollection').mockRejectedValue(new Error('Internal Server Error'));
			await collectionController.postCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
	describe('editCollection', () => {
		it('should edit a collection', async () => {
			const mockReq = {
				params: { collectionId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'editCollection').mockResolvedValue({ message: 'success' });
			await collectionController.editCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(200);
		});
		it('should throw an HTTPError when service throws HTTPError', async () => {
			const mockReq = {
				params: { collectionId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'editCollection').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await collectionController.editCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
		it('should throw an 500 Error when service throw Error', async () => {
			const mockReq = {
				params: { collectionId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'editCollection').mockRejectedValue(new Error('Internal Server Error'));
			await collectionController.editCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
	describe('deleteCollection', () => {
		it('should delete a collection', async () => {
			const mockReq = {
				params: { collectionId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'deleteCollection').mockResolvedValue({ message: 'success' });
			await collectionController.deleteCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(200);
		});
		it('should throw an HTTPError when service throws HTTPError', async () => {
			const mockReq = {
				params: { collectionId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'deleteCollection').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await collectionController.deleteCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
		it('should throw an 500 Error when service throw Error', async () => {
			const mockReq = {
				params: { collectionId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(collectionService, 'deleteCollection').mockRejectedValue(new Error('Internal Server Error'));
			await collectionController.deleteCollection(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
});