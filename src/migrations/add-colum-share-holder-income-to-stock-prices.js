

module.exports = {
    up: function (queryInterface, Sequelize) {
        // logic for transforming into the new state
        return queryInterface.addColumn(
            'stock_prices',
            'shareHolderIncome',
            Sequelize.DOUBLE
        );

    },

    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
        return queryInterface.removeColumn(
            'stock_prices',
            'shareHolderIncome'
        );
    }
}