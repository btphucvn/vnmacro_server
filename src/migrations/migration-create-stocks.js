'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('stocks', {

            code: {
                primaryKey: true,
                type: Sequelize.STRING
            },

            companyName: {
                type: Sequelize.STRING
            },
            business1: {
                type: Sequelize.STRING
            },
            business2: {
                type: Sequelize.STRING
            },
            business3: {
                type: Sequelize.STRING
            },
            exchanges: {
                type: Sequelize.STRING
            },
            firstDate: {
                type: Sequelize.STRING
            },
            volume: {
                type: Sequelize.DOUBLE
            },



            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('stocks');
    }
};