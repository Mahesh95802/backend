'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class CollectionValue extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			this.belongsTo(models.Collection, { foreignKey: 'collectionId', onDelete: 'CASCADE', hooks: true });
			this.belongsTo(models.ContentSchema, { foreignKey: 'contentSchemaId', onDelete: 'CASCADE', hooks: true });
		}
	}
	CollectionValue.init({
		value: DataTypes.STRING,
		collectionId: DataTypes.INTEGER,
		contentSchemaId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'CollectionValue',
	});
	return CollectionValue;
};