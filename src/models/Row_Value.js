'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Row_Value extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate
            Row_Value.belongsTo(models.Row, { foreignKey: 'id_row' });


        }
    };
    Row_Value.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_row: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
        timestamp: DataTypes.DOUBLE,

    }, {
        sequelize,
        modelName: 'Row_Value',
        tableName: 'row_value'

    });
    return Row_Value;
};