var sequelize = require('../models/database')
var Utilizador = require('../models/utilizador')

const controllers_Utilizador = {}

sequelize.sync()

//------------------------------------------List------------------------------------------
controllers_Utilizador.listarUtilizadores = async(req, res) => {
  const data = await Utilizador.findAll({
    order: [
      ['nome', 'ASC']
    ]
  })
  .then(function(data){
    return data
  })
  .catch(err => {
    return err
  })
  res.json({Success: true, data, data})
}

//------------------------------------------Add-------------------------------------------

controllers_Utilizador.adicionarUtilizador = async(req, res) => {
  const { 
    nome, 
    password,
    email, 
    contacto, 
    morada, 
    cargo
  } = req.body;
  const data = await Utilizador.create({
    nome: nome,
    password: password,
    email: email,
    contacto: contacto,
    morada: morada,
    cargo: cargo
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

//------------------------------------------View by ID-------------------------------------------
controllers_Utilizador.visualizarUtilizador = async(req, res) => {
  const {id_user} = req.params;
  const data = await Utilizador.findAll({
    where: {id_user: id_user}
  })
  .then(function(data){
    return data
  })
  .catch(error =>{
    return error
  })
  res.json({success: true, data: data})
}

//------------------------------------------Edit------------------------------------------
controllers_Utilizador.editarUtilizador = async(req, res) => {
  const {id_user} = req.params;
  const { 
    nome, 
    password,
    email, 
    contacto, 
    morada, 
    cargo
  } = req.body;
  const data = await Utilizador.update({
    nome: nome,
    password: password,
    email: email,
    contacto: contacto,
    morada: morada,
    cargo: cargo
  },
  {
      where: {id_user: id_user}
  })
  .then(function(data){
      return data;
  })
  .catch(error => {
      return error;
  })
  res.json({success: true, data: data, message: "Atualizado com sucesso!"});
}

//------------------------------------------Delete------------------------------------------

controllers_Utilizador.apagarUtilizador = async(req, res) => {
  const {id_user} = req.body;
  const del = await Utilizador.destroy({
    where: { id_user: id_user }
  })
  .catch(error =>{
    console.log(error)
    return error
  })
  res.json({
    success: true, 
    deleted: del, 
    message: "Utilizador apagado com sucesso!"})
}

module.exports = controllers_Utilizador