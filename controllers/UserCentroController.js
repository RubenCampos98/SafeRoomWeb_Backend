var sequelize = require('../models/database')
var UtilizadorCentro = require('../models/utilizadorCentro')
var Utilizadores = require('../models/utilizador')
var Centros = require('../models/centro')

const controllers_UtilizadorCentro = {}

sequelize.sync()

//-------------List-------------
controllers_UtilizadorCentro.listarUtilizadorCentro = async(req, res) => {
  const data = await sequelize.query('SELECT utilizadores.nome AS nome_user, centros.nome AS nome_centro ' +
                                      'FROM utilizadores JOIN utilizadores_centros ' +
                                      'ON utilizadores."id_user" = utilizadores_centros."id_user" JOIN centros ' +
                                      'ON utilizadores_centros."id_centro" = centros."id_centro" ',{
      model: Utilizadores, UtilizadorCentro, Centros, 
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

module.exports = controllers_UtilizadorCentro