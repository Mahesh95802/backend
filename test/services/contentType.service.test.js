/* eslint-disable no-undef */
const { ContentType } = require('../../src/models');
const contentTypeService = require('../../src/services/contentType.service');

describe('Content Type Service', () => {
	describe('getAllContentTypes', () => {
		it('should return all content types', async () => {
			jest.spyOn(ContentType, 'findAll').mockResolvedValue([{ id: 1 }, { id: 2 }]);
			const result = await contentTypeService.getAllContentTypes(1);
			expect(result).toEqual([{ id: 1 }, { id: 2 }]);
		});
		it('should return an Error if DB Error', async () => {
			jest.spyOn(ContentType, 'findAll').mockRejectedValue(new Error('DB Error'));
			await expect(contentTypeService.getAllContentTypes(1)).rejects.toThrow('DB Error');
		});
	});
	describe('postContentType', () => {
		it('should return a content type', async () => {
			jest.spyOn(ContentType, 'create').mockResolvedValue({ id: 1 });
			const result = await contentTypeService.postContentType({ id: 1 }, 1);
			expect(result).toEqual({ id: 1 });
		});
		it('should return an Error if DB Error', async () => {
			jest.spyOn(ContentType, 'create').mockRejectedValue(new Error('DB Error'));
			await expect(contentTypeService.postContentType({ id: 1 }, 1)).rejects.toThrow('DB Error');
		});
	});
	describe('putContentType', () => {
		it('should return a edited content type', async () => {
			jest.spyOn(ContentType, 'update').mockResolvedValue([1]);
			const result = await contentTypeService.putContentType({ id: 1 }, 1, 1);
			expect(result).toEqual([1]);
		});
		it('should return an Error if DB Error', async () => {
			jest.spyOn(ContentType, 'update').mockRejectedValue(new Error('DB Error'));
			await expect(contentTypeService.putContentType({ id: 1 }, 1, 1)).rejects.toThrow('DB Error');
		});
	});
});