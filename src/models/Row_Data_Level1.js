'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Row_Data_Level1 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate
            Row_Data_Level1.belongsTo(models.Row_Data_Level1, { foreignKey: 'id_table'});
            Row_Data_Level1.hasMany(models.Row_Data_Level1_Value, { foreignKey: 'id_row_data_level1', as: 'data' });

            Row_Data_Level1.hasMany(models.Row_Data_Level2, { foreignKey: 'id_row_data_level1', as: 'rows' });

            Row_Data_Level1.hasOne(models.AllKey,{foreignKey:'key_id',sourceKey:'key_id',as: 'names'})
        }
    };
    Row_Data_Level1.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        key_id: DataTypes.STRING,
        unit: DataTypes.STRING,
        stt: DataTypes.INTEGER,

        id_table: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Row_Data_Level1',
        tableName: 'row_data_level1s',
    });
    return Row_Data_Level1;
};