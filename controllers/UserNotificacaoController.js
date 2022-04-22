var sequelize = require('../models/database')
var UtilizadorNotificacao = require('../models/utilizadorNotificacao')
var Notificacoes = require('../models/notificacao')
var Utilizadores = require('../models/utilizador')

const controllers_UtilizadorNotificacao = {}

sequelize.sync()

//-------------List-------------
/*controllers_UtilizadorNotificacao.listarUtilizadorNotificacao = async(req, res) => {
  const data = await UtilizadorNotificacao.findAll() 
  .then(function(data){
    return data
  })
  .catch(err => {
    return err
  })
  res.json({Success: true, data, data})
}*/

controllers_UtilizadorNotificacao.listarUtilizadorNotificacao = async(req, res) => {  
  const data = await sequelize.query('SELECT notificacoes.mensagem, utilizadores.nome ' +
                                      'FROM notificacoes JOIN utilizadores_notificacoes ' +
                                      'ON notificacoes."id_notificacao" = utilizadores_notificacoes."id_notificacao" JOIN utilizadores ' +
                                      'ON utilizadores_notificacoes."id_user" = utilizadores."id_user" ',{
      model: Notificacoes, UtilizadorNotificacao, Utilizadores, 
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

module.exports = controllers_UtilizadorNotificacao