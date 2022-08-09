var Sequelize = require('sequelize')
var db = require('./database')

var Centro = require('./centro') 
var Cancelamento = require('./cancelamento')

var Sala = db.define('salas', {
  id_sala: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_centro: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Centro,
      key:'id_centro'
    }
  },
  id_cancelamento: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Cancelamento,
      key: 'id_cancelamento'
    }
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  capacidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  alocacaomax: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  limpeza: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  estado: {
    type: Sequelize.INTEGER,
    default : 1
  }
},
{
  freezeTableName: true,
  timestamps: false
})

Sala.belongsTo(Centro, {foreignKey: 'id_centro'})
Sala.belongsTo(Cancelamento, {foreignKey: 'id_cancelamento'})

module.exports = Sala