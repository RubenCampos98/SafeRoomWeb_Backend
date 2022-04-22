var sequelize = require('../models/database')
var Utilizador = require('../models/utilizador')

const controllers_Utilizador = {}

sequelize.sync()

//-------------List-------------
controllers_Utilizador.listarUtilizadores = async(req, res) => {
  const data = await Utilizador.findAll()
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

module.exports = controllers_Utilizador