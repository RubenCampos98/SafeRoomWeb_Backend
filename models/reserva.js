var Sequelize = require('sequelize')
var db = require('./database')

var Utilizador = require('./utilizador')
var Sala = require('./sala')

var Reserva = db.define('reservas', {
  id_reserva: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: Sequelize.INTEGER,
    references:{
      model: Utilizador,
      key:'id_user'
  }
  },
  id_sala: {
    type: Sequelize.INTEGER,
    references:{
      model: Sala,
      key:'id_sala'
  }
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false
  },
  hora_inicio: {
    type: Sequelize.TIME,
    allowNull: false
  },
  hora_fim: {
    type: Sequelize.TIME,
    allowNull: false
  },
  estado: {
    type: Sequelize.INTEGER,
    default : 1
  },
  limpeza: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  notas: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
  freezeTableName: true,
  timestamps: false
})

Reserva.belongsTo(Utilizador, {foreignKey: 'id_user'})
Reserva.belongsTo(Sala, {foreignKey: 'id_sala'})

module.exports = Reserva