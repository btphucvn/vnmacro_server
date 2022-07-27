'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Macro_Type extends Model {

        static associate(models) {
            // define association herenpx sequelize-cli db:migrate

            Macro_Type.hasMany(models.Table, { foreignKey: 'id_macro_type', as: 'value_types' });

        }
    };
    Macro_Type.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        key_id: DataTypes.STRING,

        title: DataTypes.STRING,
        id_detail: DataTypes.INTEGER,
        key_id_macro: DataTypes.STRING,
        stt: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Macro_Type',
        tableName: 'macro_types'
    });
    return Macro_Type;
};