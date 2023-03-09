'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ContentType extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			this.hasMany(models.ContentSchema, { foreignKey: 'contentTypeId' });
			this.hasMany(models.Collection, { foreignKey: 'contentTypeId' });
		}
	}
	ContentType.init({
		name: DataTypes.STRING,
		userId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'ContentType',
	});
	return ContentType;
};