/* eslint-disable no-undef */
const contentTypeController = require('../../src/controllers/contentType.controller');
const contentTypeService = require('../../src/services/contentType.service');
const HTTPError = require('../../src/errors/HTTPError');

describe('contentType controller', () => {
	describe('getAllContentTypes', () => {
		it('should return all contentTypes', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentTypeService, 'getAllContentTypes').mockResolvedValue({ message: 'success' });
			await contentTypeController.getAllContentTypes(mockReq, mockRes);
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
			jest.spyOn(contentTypeService, 'getAllContentTypes').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await contentTypeController.getAllContentTypes(mockReq, mockRes);
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
			jest.spyOn(contentTypeService, 'getAllContentTypes').mockRejectedValue(new Error('Internal Server Error'));
			await contentTypeController.getAllContentTypes(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
	describe('postContentType', () => {
		it('should create a contentType', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentTypeService, 'postContentType').mockResolvedValue({ message: 'success' });
			await contentTypeController.postContentType(mockReq, mockRes);
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
			jest.spyOn(contentTypeService, 'postContentType').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await contentTypeController.postContentType(mockReq, mockRes);
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
			jest.spyOn(contentTypeService, 'postContentType').mockRejectedValue(new Error('Internal Server Error'));
			await contentTypeController.postContentType(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
	describe('putContentType', () => {
		it('should update a contentType', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentTypeService, 'putContentType').mockResolvedValue({ message: 'success' });
			await contentTypeController.putContentType(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(200);
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
			jest.spyOn(contentTypeService, 'putContentType').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await contentTypeController.putContentType(mockReq, mockRes);
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
			jest.spyOn(contentTypeService, 'putContentType').mockRejectedValue(new Error('Internal Server Error'));
			await contentTypeController.putContentType(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
});