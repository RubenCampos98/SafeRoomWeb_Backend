var sequelize = require('../models/database')
var Notificacao = require('../models/notificacao')

const controllers_Notificacao = {}

sequelize.sync()

//-------------List-------------
controllers_Notificacao.listarNotificacoes = async(req, res) => {
  const data = await Notificacao.findAll()
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

module.exports = controllers_Notificacao