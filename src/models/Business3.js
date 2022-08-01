'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Business3 extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate


        }
    };
    Business3.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },

        name_en: DataTypes.STRING,
        name_vi: DataTypes.STRING,
        id_Business3: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Business3',
        tableName: 'business3s'
    });
    return Business3;
};