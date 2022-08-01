'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Macro extends Model {

        static associate(models) {
            // define association herenpx sequelize-cli db:migrate

            Macro.hasOne(models.AllKey,{foreignKey:'key_id',sourceKey:'key_id',as: 'names'})
            Macro.hasMany(models.Macro_Type, { foreignKey: 'key_id_macro',sourceKey:'key_id', as: 'macro_types' });

        }
    };
    Macro.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        key_id: DataTypes.STRING,

        title: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Macro',
        tableName: 'macros',
        timestamps:false
    });
    return Macro;
};