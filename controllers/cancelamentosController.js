var sequelize = require('../models/database')
var Cancelamento = require('../models/cancelamento')

const controllers_Cancelamento = {}

sequelize.sync()

//-------------List-------------
controllers_Cancelamento.listarCancelamentos = async(req, res) => {
  const data = await Cancelamento.findAll()
  .then(function(data){
    return data
  })
  .catch(err => {
    return err
  })
  res.json({Success: true, data, data})
}

//-------------View by ID-------------

//-------------Edit-------------

//-------------Delete-------------

module.exports = controllers_Cancelamento