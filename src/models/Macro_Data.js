'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Macro_Data extends Model {

        static associate(models) {
            // define association herenpx sequelize-cli db:migrate



        }
    };
    Macro_Data.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        key_id_macro_type: DataTypes.STRING,

        value_type: DataTypes.STRING,
        data: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Macro_Data',
        tableName: 'macro_datas',
        timestamps:false
    });
    return Macro_Data;
};