'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Market_Ratio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate


        }
    };
    Market_Ratio.init({

        code: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        timeStamp: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            primaryKey: true,
        },
        pe: DataTypes.DOUBLE,
        pb: DataTypes.DOUBLE,
        leverage: DataTypes.DOUBLE,


    }, {
        sequelize,
        modelName: 'Market_Ratio',
    });
    return Market_Ratio;
};