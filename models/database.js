var Sequelize = require('sequelize')

const sequelize = new Sequelize(
  /*'saferoom_db', //bd name
  'postgres',      //user
  'ruben123',   //password
  { 
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
  }*/
  'd9rufjoo05vjna', //db
  'zoxetsctlkuizb', //user
  '184c9c7c3382a5a29c58e681e4eae429932cd4be4243ec403955ed44dd6404b6', //password
  {
    host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
    port: '5432',
    dialect: 'postgres',
    dialectOptions: {
        ssl:{
            rejectUnauthorized: false
        }
    }
}
)

module.exports = sequelize