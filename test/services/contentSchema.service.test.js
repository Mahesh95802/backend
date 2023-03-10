const { CollectionValue, ContentSchema } = require('../../src/models'); 
const contentSchemaService = require('../../src/services/contentSchema.service');

describe('Content Schema Service', () => {
    describe('getAllContentSchemas', () => {
        it('should return all content schemas', async () => {
            jest.spyOn(ContentSchema, 'findAll').mockResolvedValue([{ id: 1 }, { id: 2 }]);
            const result = await contentSchemaService.getContentTypeSchema(1);
            expect(result).toEqual([{ id: 1 }, { id: 2 }]);
        });
        it('should return an Error if DB Error', async () => {
            jest.spyOn(ContentSchema, 'findAll').mockRejectedValue(new Error('DB Error'));
            await expect(contentSchemaService.getContentTypeSchema(1)).rejects.toThrow('DB Error');
        });
    });
    describe('postContentSchema', () => {
        it('should return a content schema', async () => {
            jest.spyOn(ContentSchema, 'create').mockResolvedValue({ id: 1 });
            const result = await contentSchemaService.postContentTypeSchema({ id: 1 }, 1);
            expect(result).toEqual({ id: 1 });
        });
        it('should return an Error if DB Error', async () => {
            jest.spyOn(ContentSchema, 'create').mockRejectedValue(new Error('DB Error'));
            await expect(contentSchemaService.postContentTypeSchema({ id: 1 }, 1)).rejects.toThrow('DB Error');
        });
    });
    describe('putContentSchema', () => {
        it('should return a edited content schema', async () => {
            jest.spyOn(CollectionValue, 'findAndCountAll').mockResolvedValue({ count: 0 });
            jest.spyOn(ContentSchema, 'update').mockResolvedValue([1]);
            const result = await contentSchemaService.putContentTypeSchema({ id: 1 }, 1, 1);
            expect(result).toEqual([1]);
        });
        it('should return an HTTPError if field already in use', async () => {
            jest.spyOn(CollectionValue, 'findAndCountAll').mockResolvedValue({ count: 1 });
            await expect(contentSchemaService.putContentTypeSchema({ id: 1 }, 1, 1)).rejects.toThrow('Field is already used in a collection');
        });
        it('should return an Error if DB Error', async () => {
            jest.spyOn(CollectionValue, 'findAndCountAll').mockRejectedValue(new Error('DB Error'));
            await expect(contentSchemaService.putContentTypeSchema({ id: 1 }, 1, 1)).rejects.toThrow('DB Error');
        });
    });
    describe('deleteContentSchema', () => {
        it('should return a deleted content schema', async () => {
            jest.spyOn(ContentSchema, 'destroy').mockResolvedValue(1);
            const result = await contentSchemaService.deleteContentTypeSchema(1, 1);
            expect(result).toEqual(1);
        });
        it('should return an Error if DB Error', async () => {
            jest.spyOn(ContentSchema, 'destroy').mockRejectedValue(new Error('DB Error'));
            await expect(contentSchemaService.deleteContentTypeSchema(1, 1)).rejects.toThrow('DB Error');
        });
    });
});