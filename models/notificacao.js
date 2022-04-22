var Sequelize = require('sequelize')
var db = require('./database')

var Notificacao = db.define('notificacoes', {
  id_notificacao: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mensagem: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  hora: {
    type: Sequelize.TIME,
    allowNull: false
  }
},
{
  freezeTableName: true,
  timestamps: false
})

module.exports = Notificacao