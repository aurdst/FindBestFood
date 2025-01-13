const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(procces.env.DB, process.env.USER_DBPASSWORD_DB, 
    {
        host: 'localhost',
        dialect: 'mysql',
    }
 );

 module.exports = sequelize