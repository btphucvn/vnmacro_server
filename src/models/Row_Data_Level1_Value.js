'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Row_Data_Level1_Value extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate
            Row_Data_Level1_Value.belongsTo(models.Row_Data_Level1, { foreignKey: 'id_row_data_level1'});


        }
    };
    Row_Data_Level1_Value.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        id_row_data_level1: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
        timestamp: DataTypes.DOUBLE,

    }, {
        sequelize,
        modelName: 'Row_Data_Level1_Value',
        tableName: 'row_data_level1_values'

    });
    return Row_Data_Level1_Value;
};