'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Quantity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate


        }
    };
    Quantity.init({

        keyQuantity: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },

        title: DataTypes.STRING,
        idDetail: DataTypes.INTEGER,


    }, {
        sequelize,
        modelName: 'Quantity',
    });
    return Quantity;
};