var Sequelize = require('sequelize')
var db = require('./database')

var Cancelamento = db.define('cancelamentos', {
  id_cancelamento: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data_inicio: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  hora_inicio: {
    type: Sequelize.TIME,
    allowNull: false
  },
  data_fim: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  hora_fim: {
    type: Sequelize.TIME,
    allowNull: false
  },
  motivo: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
  freezeTableName: true,
  timestamps: false
})

module.exports = Cancelamento