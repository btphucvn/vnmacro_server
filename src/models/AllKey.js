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
            AllKey.belongsTo(models.Row_Data_Level1, { foreignKey: 'keyID',targetKey:'keyID'});
            AllKey.belongsTo(models.Row_Data_Level2, { foreignKey: 'keyID',targetKey:'keyID'});
            AllKey.belongsTo(models.Row_Data_Level3, { foreignKey: 'keyID',targetKey:'keyID'});
            AllKey.belongsTo(models.Table, { foreignKey: 'keyID',targetKey:'keyID'});

        }
    };
    AllKey.init({

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        keyID: DataTypes.STRING,
        nameVi: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'AllKey',
    });
    return AllKey;
};