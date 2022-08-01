'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Market_Name extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate


        }
    };
    Market_Name.init({

        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        key_id: DataTypes.STRING,
        name_en: DataTypes.STRING,
        name_vi: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'Market_Name',
        tableName:'market_names'
    });
    return Market_Name;
};