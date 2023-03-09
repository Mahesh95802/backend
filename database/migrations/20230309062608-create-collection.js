'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Collections', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			value: {
				type: Sequelize.STRING
			},
			contentSchemaId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'ContentSchemas',
					key: 'id'
				},
				onDelete: 'CASCADE',
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			contentTypeId: {
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
		await queryInterface.dropTable('Collections');
	}
};