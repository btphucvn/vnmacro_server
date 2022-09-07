'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Row extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate
            Row.hasOne(models.AllKey,{foreignKey:'key_id',sourceKey:'key_id',as: 'names'})
            Row.hasMany(models.Row_Value, { foreignKey: 'id_row', as: 'data' });
            Row.belongsTo(models.Table, { foreignKey: 'id_table'});

        }
    };
    Row.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        key_id: DataTypes.STRING,
        name: DataTypes.STRING,
        level:DataTypes.INTEGER,
        unit: DataTypes.STRING,
        stt: DataTypes.INTEGER,
        id_table: DataTypes.INTEGER,
        id_string: DataTypes.STRING,
        yaxis: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Row',
        tableName: 'rows',
    });
    return Row;
};