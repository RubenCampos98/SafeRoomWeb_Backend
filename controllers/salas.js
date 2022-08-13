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

//----------------Add-----------------------
controllers_Sala.adicionarSala = async(req, res) => {
  const { 
    id_centro,
    id_cancelamento,
    nome,
    capacidade,
    alocacaomax,
    limpeza
  } = req.body;
  const data = await Sala.create({
    id_centro: id_centro,
    id_cancelamento: id_cancelamento,
    nome: nome,
    capacidade: capacidade,
    alocacaomax: alocacaomax,
    limpeza: limpeza
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    console.log("Erro: "+error)
    return error;
  })
  res.status(200).json({
    success: true,
    message:"Registado",
    data: data
  });
}

//-------------View by ID-------------
controllers_Sala.visualizarSala = async(req, res) => {
  const {id_sala} = req.params;
  const data = await Sala.findAll({
    where: {id_sala: id_sala}
  })
  .then(function(data){
    return data
  })
  .catch(error =>{
    return error
  })
  res.json({success: true, data: data})
}

//-------------Edit-------------
controllers_Sala.editarSala = async(req, res) => {
  const {id_sala} = req.params;
  const { 
    id_centro,
    id_cancelamento,
    nome,
    capacidade,
    alocacaomax,
    limpeza
  } = req.body;
  const data = await Sala.create({
    id_centro: id_centro,
    id_cancelamento: id_cancelamento,
    nome: nome,
    capacidade: capacidade,
    alocacaomax: alocacaomax,
    limpeza: limpeza
  },
  {
    where: {id_sala: id_sala}
  })
  .then(function(data){
      return data;
  })
  .catch(error => {
      return error;
  })
  res.json({success: true, data: data, message: "Atualizado com sucesso!"});
}

//-------------Delete-------------
controllers_Sala.apagarSala = async(req, res) => {
  const {id_sala} = req.body;
  const del = await Sala.destroy({
    where: { id_sala: id_sala }
  })
  .catch(error =>{
    console.log(error)
    return error
  })
  res.json({
    success: true, 
    deleted: del, 
    message: "Sala apagado com sucesso!"})
}

module.exports = controllers_Sala