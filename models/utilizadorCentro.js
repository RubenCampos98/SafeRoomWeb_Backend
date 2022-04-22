var Sequelize = require('sequelize')
var db = require('./database')

var Utilizador = require('./utilizador')
var Centro = require('./centro')

var UtilizadorCentro = db.define('utilizadores_centros', {
  id_user: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references:{
      model: Utilizador,
      key:'id_user'
    }
  },
  id_centro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references:{
      model: Centro,
      key:'id_centro'
    }
  }
},
{
  freezeTableName: true,
  timestamps: false
})

UtilizadorCentro.belongsTo(Utilizador, {foreignKey: 'id_user'})
UtilizadorCentro.belongsTo(Centro, {foreignKey: 'id_centro'})

module.exports = UtilizadorCentro