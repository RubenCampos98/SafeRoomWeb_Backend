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

//---------------Add---------------------

controllers_Centros.bulkInsert = async function(req, res){
  try{
    let centros = await Centros.bulkCreate(req.body)
    res.status(201).json({
      message: 'ola',
      data: centros
    })
  } catch(error){
    res.status(404).json({
      message: 'erro'
    })
  }
}

controllers_Centros.adicionarCentro = async(req, res) => {
  const { 
    localidade,
    nome,
    notas
  } = req.body;
  const data = await Centros.create({
    localidade: localidade,
    nome: nome,
    notas: notas
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
controllers_Centros.visualizarCentro = async(req, res) => {
  const {id_centro} = req.params;
  const data = await Centros.findAll({
    where: {id_centro: id_centro}
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
controllers_Centros.editarCentro = async(req, res) => {
  const {id_centro} = req.params;
  const { 
    localidade,
    nome,
    notas
  } = req.body;
  const data = await Centros.update({
    localidade: localidade,
    nome: nome,
    notas: notas
  },
  {
    where: {id_centro: id_centro}
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
controllers_Centros.apagarCentro = async(req, res) => {
  const {id_centro} = req.body;
  const del = await Centros.destroy({
    where: { id_centro: id_centro }
  })
  .catch(error =>{
    console.log(error)
    return error
  })
  res.json({
    success: true, 
    deleted: del, 
    message: "Centro apagado com sucesso!"})
}

module.exports = controllers_Centros