var Sequelize = require('sequelize')
var db = require('./database')

var Notificacao = require('./notificacao')
var Utilizador = require('./utilizador')

var UtilizadorNotificacao = db.define('utilizadores_notificacoes', {
  id_notificacao: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references:{
      model: Notificacao,
      key:'id_notificacao'
    }
  },
  id_user: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references:{
      model: Utilizador,
      key:'id_user'
    }
  }
},
{
  freezeTableName: true,
  timestamps: false
})

UtilizadorNotificacao.belongsTo(Notificacao, {foreignKey: 'id_notificacao'})
UtilizadorNotificacao.belongsTo(Utilizador, {foreignKey: 'id_user'})

module.exports = UtilizadorNotificacao