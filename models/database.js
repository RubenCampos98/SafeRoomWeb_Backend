var Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'saferoom_db', //bd name
  'postgres',      //user
  'ruben123',   //password
  { 
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
  }
)

module.exports = sequelize