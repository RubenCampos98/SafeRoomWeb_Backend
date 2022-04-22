var sequelize = require('../models/database')
var Sala = require('../models/sala')

const controllers_Sala = {} 

sequelize.sync()

//-------------List-------------
controllers_Sala.listarSalas = async(req, res) => {
  const data = await Sala.findAll()
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

module.exports = controllers_Sala