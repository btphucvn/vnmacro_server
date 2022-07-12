'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('stock_prices', {

            code: {
                type: Sequelize.STRING
            },
            open: {
                type: Sequelize.DOUBLE
            },
            close: {
                type: Sequelize.DOUBLE
            },
            high: {
                type: Sequelize.DOUBLE
            },
            low: {
                type: Sequelize.DOUBLE
            },
            capitalize: {
                type: Sequelize.DOUBLE
            },
            revenue: {
                type: Sequelize.DOUBLE
            },
            costOfGoodSold: {
                type: Sequelize.DOUBLE
            },
            postTaxProfit: {
                type: Sequelize.DOUBLE
            },
            asset: {
                type: Sequelize.DOUBLE
            },
            equity: {
                type: Sequelize.DOUBLE
            },
            liabilities: {
                type: Sequelize.DOUBLE
            },
            timeStamp: {
                type: Sequelize.DOUBLE
            },


        }, {

            uniqueKeys: {
                uni_code_timeStamp: {
                    fields: ['code', 'timeStamp']
                }
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('stock_prices');
    }
};