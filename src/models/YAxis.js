'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class YAxis extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate
            
        }
    };
    YAxis.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },

        unit: DataTypes.STRING,
        yaxis: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'YAxis',
        tableName: 'yaxis',
        timestamps:false,

    });
    return YAxis;
};