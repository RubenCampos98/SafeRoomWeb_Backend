var sequelize = require('../models/database')
var NotificacaoReserva = require('../models/notificacaoReserva')

const controllers_NotificacaoReserva = {}

sequelize.sync()

//-------------List-------------
controllers_NotificacaoReserva.listarNotificacaoReserva = async(req, res) => {
  const data = await NotificacaoReserva.findAll()
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

module.exports = controllers_NotificacaoReserva