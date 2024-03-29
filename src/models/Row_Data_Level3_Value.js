'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Row_Data_Level3_Value extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            Row_Data_Level3_Value.belongsTo(models.Row_Data_Level3, { foreignKey: 'id_row_data_level3'});


        }
    };
    Row_Data_Level3_Value.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        idRowDataLevel3: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
        timestamp: DataTypes.DOUBLE,

    }, {
        sequelize,
        modelName: 'Row_Data_Level3_Value',
        tableName: 'row_data_level3_values',

    });
    return Row_Data_Level3_Value;
};