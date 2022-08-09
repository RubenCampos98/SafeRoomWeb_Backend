var sequelize = require('../models/database')
var Centros = require('../models/centro')

const controllers_Centros = {}

sequelize.sync()

//-------------List-------------
controllers_Centros.listarCentros = async(req, res) => {
  const data = await Centros.findAll()
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

module.exports = controllers_Centros