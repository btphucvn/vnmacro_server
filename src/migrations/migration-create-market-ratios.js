'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('stock_prices', {

            code: {
                primaryKey: true,
                type: Sequelize.STRING
            },
            pe: {
                type: Sequelize.DOUBLE
            },
            pb: {
                type: Sequelize.DOUBLE
            },
            leverage: {
                type: Sequelize.DOUBLE
            }


        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('stock_prices');
    }
};