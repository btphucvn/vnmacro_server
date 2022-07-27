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

            Table.hasOne(models.AllKey,{foreignKey:'key_id',sourceKey:'key_id',as: 'names'});
            
            Table.belongsTo(models.Macro_Type, { foreignKey: 'id_macro_type' });

        }
    };
    Table.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        key_id: DataTypes.STRING,
        stt: DataTypes.INTEGER,
        value_type: DataTypes.STRING,
        date_type: DataTypes.STRING,
        id_macro_type:DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Table',
        tableName: 'tables',

    });
    return Table;
};