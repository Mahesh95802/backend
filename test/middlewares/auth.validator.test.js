/* eslint-disable no-undef */
const authValidator = require('../../src/middlewares/auth.validator');
const axios = require('axios');
const HTTPError = require('../../src/errors/HTTPError');

describe('Auth Validator', () => {
	describe('Verify Token', () => {
		it('should call next when token is valid', async () => {
			const mockReq = {
				headers: { authorization: 'valid token' }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			jest.spyOn(axios, 'get').mockResolvedValue({ data: { id: 1 } });
			const next = jest.fn();
			await authValidator.verifyJWT(mockReq, mockRes, next);
			expect(next).toHaveBeenCalled();
		});
		it('should return a 401 error when no token is provided', async () => {
			const mockReq = {
				headers: {}
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			await authValidator.verifyJWT(mockReq, mockRes, jest.fn());
			expect(mockRes.status).toHaveBeenCalledWith(401);
		});
		it('should return a 401 error when token is invalid', async () => {
			const mockReq = {
				headers: { authorization: 'invalid token' }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			jest.spyOn(axios, 'get').mockRejectedValue(new HTTPError(401, 'Unauthorized'));
			await authValidator.verifyJWT(mockReq, mockRes, jest.fn());
			expect(mockRes.status).toHaveBeenCalledWith(401);
		});
		it('should return a 500 error when service throws an error', async () => {
			const mockReq = {
				headers: { authorization: 'invalid token' }
			};
			const mockRes = {
				status: jest.fn().mockReturnThis(),
				json: jest.fn()
			};
			jest.spyOn(axios, 'get').mockRejectedValue(new Error());
			await authValidator.verifyJWT(mockReq, mockRes, jest.fn());
			expect(mockRes.status).toHaveBeenCalledWith(401);
		});
	});
});
