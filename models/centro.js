var Sequelize = require('sequelize')
var db = require('./database')

var Centro = db.define('centros', {
  id_centro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  localidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  estado: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  notas: {
    type: Sequelize.STRING
  }
},
{
  freezeTableName: true,
  timestamps: false
})

module.exports = Centro