'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Stock extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate


        }
    };
    Stock.init({

        code: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true, 
        },
        companyName: DataTypes.STRING,
        business1: DataTypes.STRING,
        business2: DataTypes.STRING,
        business3: DataTypes.STRING,
        exchanges: DataTypes.STRING,
        firstDate: DataTypes.STRING,
        volume: DataTypes.DOUBLE,


    }, {
        sequelize,
        modelName: 'Stock',
    });
    return Stock;
};