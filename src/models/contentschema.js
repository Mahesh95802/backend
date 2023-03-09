'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ContentSchema extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			this.belongsTo(models.ContentType, { foreignKey: 'contentTypeId', onDelete: 'CASCADE', hooks: true });
			this.hasMany(models.Collection, { foreignKey: 'contentSchemaId', onDelete: 'CASCADE', hooks: true });
		}
	}
	ContentSchema.init({
		fieldName: DataTypes.STRING,
		fieldType: DataTypes.STRING,
		userId: DataTypes.INTEGER,
		contentTypeId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'ContentSchema',
	});
	return ContentSchema;
};