'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('customer', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            email: {
                type: Sequelize.TEXT,
                allowNull: false,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('food');
    }
};
