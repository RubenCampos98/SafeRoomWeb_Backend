var sequelize = require('../models/database')
var NotificacaoReserva = require('../models/notificacaoReserva')
var Reservas = require('../models/reserva')
var Notificacoes = require('../models/notificacao')

const controllers_NotificacaoReserva = {}

sequelize.sync()

//-------------List-------------
controllers_NotificacaoReserva.listarNotificacaoReserva = async(req, res) => {
  const data = await sequelize.query('SELECT notificacoes.mensagem, reservas.id_reserva ' +
                                      'FROM notificacoes JOIN notificacoes_reservas ' +
                                      'ON notificacoes."id_notificacao" = notificacoes_reservas."id_notificacao" JOIN reservas ' +
                                      'ON notificacoes_reservas."id_reserva" = reservas."id_reserva" ',{
      model: Notificacoes, NotificacaoReserva, Reservas, 
      mapToModel: true
  })
  .then(function(data){
      return data
  })
  .catch(err =>{
      return err
  })
  res.json({success: true, data: data})
}

//-------------View by ID-------------

//-------------Edit-------------

//-------------Delete-------------

module.exports = controllers_NotificacaoReserva