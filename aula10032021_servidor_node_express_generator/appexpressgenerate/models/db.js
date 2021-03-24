const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("form_test", "root", "root", {
    host: 'localhost',
    dialect: 'mysql',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true
  },
  timezone: '+05:30' //for writing to database
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}