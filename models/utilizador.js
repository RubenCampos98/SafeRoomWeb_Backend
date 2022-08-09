var Sequelize = require('sequelize')
var db = require('./database')

var Utilizador = db.define('utilizadores', {
  id_user: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  morada: {
    type: Sequelize.STRING
  },
  contacto: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  cargo: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  estadoconta: {
    type: Sequelize.INTEGER,
    default : 0
  },
  datavalidacao: {
    type: Sequelize.DATE
  }
},
{
  freezeTableName: true,
  timestamps: false
})

module.exports = Utilizador