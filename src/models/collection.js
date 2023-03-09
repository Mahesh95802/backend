'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Collection extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			this.belongsTo(models.ContentType, { foreignKey: 'contentTypeId', onDelete: 'CASCADE', hooks: true });
			this.belongsTo(models.ContentSchema, { foreignKey: 'contentSchemaId', onDelete: 'CASCADE', hooks: true });
		}
	}
	Collection.init({
		value: DataTypes.STRING,
		contentSchemaId: DataTypes.INTEGER,
		contentTypeId: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Collection',
	});
	return Collection;
};