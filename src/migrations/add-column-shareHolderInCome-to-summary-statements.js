module.exports = {
    up: function (queryInterface, Sequelize) {
        // logic for transforming into the new state
        return queryInterface.addColumn(
            'summary_statements',
            'shareHolderIncome',
            Sequelize.DOUBLE
        );

    },

    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
        return queryInterface.removeColumn(
            'summary_statements',
            'shareHolderIncome'
        );
    }
}