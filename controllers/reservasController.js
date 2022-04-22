var sequelize = require('../models/database')
var Reserva = require('../models/reserva')

const controllers_Reserva = {}

sequelize.sync()

//-------------List-------------
controllers_Reserva.listarReservas = async(req, res) => {
  const data = await Reserva.findAll()
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

module.exports = controllers_Reserva