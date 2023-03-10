/* eslint-disable no-undef */
const contentTypeValidator = require('../../src/middlewares/contentType.validator');

describe('contentType validator', () => {
	describe('getAllContentTypes', () => {
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
			await contentTypeValidator.getAllContentTypesValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when contentTypeId is invalid', async () => {
			const mockReq = {
				user: { }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentTypeValidator.getAllContentTypesValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
	describe('postContentType', () => {
		it('should call next when name is valid', async () => {
			const mockReq = {
				body: { name: 'test' },
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentTypeValidator.postContentTypeValidator(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should throw an HTTPError when name is invalid', async () => {
			const mockReq = {
				body: { name: 1 },
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentTypeValidator.postContentTypeValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
	describe('editContentType', () => {
		it('should call next when name is valid', async () => {
			const mockReq = {
				body: { name: 'test' },
				params: { contentTypeId: 1 },
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			const next = jest.fn();
			await contentTypeValidator.putContentTypeValidator(mockReq, mockRes, next);
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
			await contentTypeValidator.putContentTypeValidator(mockReq, mockRes, next);
			expect(mockRes.status).toHaveBeenCalledWith(400);
		});
	});
});