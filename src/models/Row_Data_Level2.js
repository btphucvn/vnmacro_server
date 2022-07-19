'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Row_Data_Level2 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate
            Row_Data_Level2.belongsTo(models.Row_Data_Level1, { foreignKey: 'idRowDataLevel1'});

            Row_Data_Level2.hasMany(models.Row_Data_Level2_Value, { foreignKey: 'idRowDataLevel2', as: 'data' });

            Row_Data_Level2.hasMany(models.Row_Data_Level3, { foreignKey: 'idRowDataLevel2', as: 'rows' });


        }
    };
    Row_Data_Level2.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        keyID: DataTypes.STRING,
        unit: DataTypes.STRING,
        stt: DataTypes.INTEGER,
        idRowDataLevel1: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Row_Data_Level2',
    });
    return Row_Data_Level2;
};