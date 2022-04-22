var sequelize = require('../models/database')
var UtilizadorCentro = require('../models/utilizadorCentro')

const controllers_UtilizadorCentro = {}

sequelize.sync()

//-------------List-------------
controllers_UtilizadorCentro.listarUtilizadorCentro = async(req, res) => {
  const data = await UtilizadorCentro.findAll()
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

module.exports = controllers_UtilizadorCentro