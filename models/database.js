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
  'deu39it4q4o0uf', //db
  'cijnsgwutgegec', //user
  'ded5afcaf6e451c986f37fc206d4acd199f3971b8f1f71a0e5b68cc58b197d0a', //password
  {
    host: 'ec2-176-34-211-0.eu-west-1.compute.amazonaws.com',
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