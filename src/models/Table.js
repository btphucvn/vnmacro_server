'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Table extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate
            Table.hasMany(models.Row_Data_Level1, { foreignKey: 'idTable', as: 'rows' });


        }
    };
    Table.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        keyID: DataTypes.STRING,
        stt: DataTypes.INTEGER,
        idMacroType:DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Table',
    });
    return Table;
};