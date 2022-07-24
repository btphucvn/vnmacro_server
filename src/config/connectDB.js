const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('vnmacro', 'postgres', "Deptrai305@", {
    host: '14.225.192.11',
    port: "5432",
    dialect: 'postgres',
    logging: false
});
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = connectDB;