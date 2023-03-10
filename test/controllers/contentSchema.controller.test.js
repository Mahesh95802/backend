/* eslint-disable no-undef */
const contentSchemaController = require('../../src/controllers/contentSchema.controller');
const contentSchemaService = require('../../src/services/contentSchema.service');
const HTTPError = require('../../src/errors/HTTPError');

describe('ContentSchemaController', () => {
	describe('getContentSchema', () => {
		it('should get a contentType schema', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'getContentTypeSchema').mockResolvedValue({ message: 'success' });
			await contentSchemaController.getContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(200);
		});
		it('should throw an HTTPError when service throws HTTPError', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'getContentTypeSchema').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await contentSchemaController.getContentTypeSchema(mockReq, mockRes);
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
			jest.spyOn(contentSchemaService, 'getContentTypeSchema').mockRejectedValue(new Error('Internal Server Error'));
			await contentSchemaController.getContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	}); 
	describe('postContentSchema', () => {
		it('should create a contentType schema', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'postContentTypeSchema').mockResolvedValue({ message: 'success' });
			await contentSchemaController.postContentTypeSchema(mockReq, mockRes);
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
			jest.spyOn(contentSchemaService, 'postContentTypeSchema').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await contentSchemaController.postContentTypeSchema(mockReq, mockRes);
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
			jest.spyOn(contentSchemaService, 'postContentTypeSchema').mockRejectedValue(new Error('Internal Server Error'));
			await contentSchemaController.postContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
	describe('putContentSchema', () => {
		it('should update a contentType schema', async () => {
			const mockReq = {
				params: { contentSchemaId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'putContentTypeSchema').mockResolvedValue({ message: 'success' });
			await contentSchemaController.putContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(200);
		});
		it('should throw an HTTPError when service throws HTTPError', async () => {
			const mockReq = {
				params: { contentSchemaId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'putContentTypeSchema').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await contentSchemaController.putContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
		it('should throw an 500 Error when service throw Error', async () => {
			const mockReq = {
				params: { contentSchemaId: 1 },
				body: { name: 'test' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'putContentTypeSchema').mockRejectedValue(new Error('Internal Server Error'));
			await contentSchemaController.putContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
	describe('deleteContentSchema', () => {
		it('should delete a contentType schema', async () => {
			const mockReq = {
				params: { contentSchemaId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'deleteContentTypeSchema').mockResolvedValue({ message: 'success' });
			await contentSchemaController.deleteContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(200);
		});
		it('should throw an HTTPError when service throws HTTPError', async () => {
			const mockReq = {
				params: { contentSchemaId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'deleteContentTypeSchema').mockRejectedValue(new HTTPError(400, 'Bad Request'));
			await contentSchemaController.deleteContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
		it('should throw an 500 Error when service throw Error', async () => {
			const mockReq = {
				params: { contentSchemaId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn(),
			};
			jest.spyOn(contentSchemaService, 'deleteContentTypeSchema').mockRejectedValue(new Error('Internal Server Error'));
			await contentSchemaController.deleteContentTypeSchema(mockReq, mockRes);
			expect(mockRes.status).toHaveBeenCalledWith(500);
		});
	});
});