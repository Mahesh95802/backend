'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('ContentSchemas', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			fieldName: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING
			},
			fieldType: {
				type: Sequelize.STRING,
				defaultValue: 'string'
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			contentTypeId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'ContentTypes',
					key: 'id'
				},
				onDelete: 'CASCADE',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('ContentSchemas');
	}
};