var Sequelize = require('sequelize')
var db = require('./database')

var Notificacao = require('./notificacao')
var Reserva = require('./reserva')

var NotificacaoReserva = db.define('notificacoes_reservas', {
  id_notificacao: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references:{
      model: Notificacao,
      key:'id_notificacao'
    }
  },
  id_reserva: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references:{
      model: Reserva,
      key:'id_reserva'
    }
  }
},
{
  freezeTableName: true,
  timestamps: false
})

NotificacaoReserva.belongsTo(Notificacao, {foreignKey: 'id_notificacao'})
NotificacaoReserva.belongsTo(Reserva, {foreignKey: 'id_reserva'})

module.exports = NotificacaoReserva