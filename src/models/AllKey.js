'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AllKey extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association herenpx sequelize-cli db:migrate
            AllKey.belongsTo(models.Row_Data_Level1, { foreignKey: 'key_id', targetKey: 'key_id' });
            AllKey.belongsTo(models.Row_Data_Level2, { foreignKey: 'key_id', targetKey: 'key_id' });
            AllKey.belongsTo(models.Row_Data_Level3, { foreignKey: 'key_id', targetKey: 'key_id' });
            AllKey.belongsTo(models.Macro_Type, { foreignKey: 'key_id', targetKey: 'key_id' });

            AllKey.belongsTo(models.Macro, { foreignKey: 'key_id', targetKey: 'key_id' });
            AllKey.belongsTo(models.Table, { foreignKey: 'key_id', targetKey: 'key_id' });
            AllKey.belongsTo(models.Row, { foreignKey: 'key_id', targetKey: 'key_id' });

        }
    };
    AllKey.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        key_id: DataTypes.STRING,
        name_vi: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'AllKey',
        tableName: 'allkeys',
        timestamps: false
    });
    return AllKey;
};