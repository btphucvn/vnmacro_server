'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('summary_statements', {


            code: {
                type: Sequelize.STRING
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
            year: {
                type: Sequelize.INTEGER
            },
            quarter: {
                type: Sequelize.INTEGER
            },
            timeCreate: {
                type: Sequelize.DOUBLE
            },
            equity: {
                type: Sequelize.DOUBLE
            },
            updated: {
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

        },{
            uniqueKeys: {
                code_quarter_year: {
                    fields: ['code', 'quarter','year']
                }
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('summary_statements');
    }
};