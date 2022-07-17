'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Macro_Type extends Model {

        static associate(models) {
            // define association herenpx sequelize-cli db:migrate


        }
    };
    Macro_Type.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        keyID: DataTypes.STRING,

        title: DataTypes.STRING,
        idDetail: DataTypes.INTEGER,
        keyIDMacro: DataTypes.STRING,
        stt: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Macro_Type',
    });
    return Macro_Type;
};