const {Sequelize} = require('sequelize')
require('dotenv')

module.exports = new Sequelize(
    process.env.POSTGRES_DB_NAME,
    process.env.POSTGRES_DB_USERNAME,
    process.env.POSTGRES_DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_DB_HOST,
        port: process.env.POSTGRES_DB_PORT
    }
)