'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Row_Data_Level3 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate

            Row_Data_Level3.belongsTo(models.Row_Data_Level3, { foreignKey: 'idRowDataLevel2' });

            Row_Data_Level3.hasMany(models.Row_Data_Level3_Value, { foreignKey: 'idRowDataLevel3', as: 'data' });

        }
    };
    Row_Data_Level3.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        keyID: DataTypes.STRING,
        unit: DataTypes.STRING,
        stt: DataTypes.INTEGER,
        idRowDataLevel2: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Row_Data_Level3',
    });
    return Row_Data_Level3;
};