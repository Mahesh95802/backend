/* eslint-disable no-undef */
const contentSchemaValidator = require('../../src/middlewares/contentSchema.validator');

describe('contentSchemaValidator', () => {
	describe('getAllContentSchemas', () => {
		it('should call next when contentTypeId is valid', async () => {
			const mockReq = {
				params: { contentTypeId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentSchemaValidator.getContentTypeSchemaValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when contentTypeId is invalid', async () => {
			const mockReq = {
				params: { contentTypeId: 'a' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentSchemaValidator.getContentTypeSchemaValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
	describe('postContentSchema', () => {
		it('should call next when name is valid', async () => {
			const mockReq = {
				body: { fieldName: 'test' },
				params: { contentTypeId: 1 },
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentSchemaValidator.postContentTypeSchemaValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when name is invalid', async () => {
			const mockReq = {
				body: { name: 1 },
				params: { contentTypeId: 1 },
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentSchemaValidator.postContentTypeSchemaValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
	describe('editContentSchema', () => {
		it('should call next when name is valid', async () => {
			const mockReq = {
				body: { fieldName: 'test' },
				params: { contentSchemaId: 1 },
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentSchemaValidator.putContentTypeSchemaValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when name is invalid', async () => {
			const mockReq = {
				body: { name: 1 },
				params: { contentSchemaId: 'a' },
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentSchemaValidator.putContentTypeSchemaValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
	describe('deleteContentSchema', () => {
		it('should call next when name is valid', async () => {
			const mockReq = {
				params: { contentSchemaId: 1 },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentSchemaValidator.deleteContentTypeSchemaValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when name is invalid', async () => {
			const mockReq = {
				params: { contentSchemaId: 'a' },
				user: { id: 1 }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentSchemaValidator.deleteContentTypeSchemaValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
});