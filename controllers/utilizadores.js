var sequelize = require('../models/database')
var Utilizador = require('../models/utilizador')

const controllers_Utilizador = {}

const nodemailer = require("nodemailer")

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

//------------------------------------------Count------------------------------------------
controllers_Utilizador.contarUtilizadores = async(req, res) => {
  const data = await Utilizador.count()
  .then(function(data){
    return data
  })
  .catch(err => {
    return err
  })
  res.json({
    Success: true, 
    data, data
  })
}

//------------------------------------------Bulk-------------------------------------------

controllers_Utilizador.bulkInsert = async function(req, res){
  try{
    let users = await Utilizador.bulkCreate(req.body.csvArray)
    res.status(201).json({
      message: 'Inseridos com sucesso!!!',
      data: users
    })
  }catch(error){
    res.status(404).json({
      message: 'Erro ao inserir', 
      error
    })
  }
}

/* 
controllers_Utilizador.bulkInsert = async function(req, res){
  let users = await Utilizador.bulkCreate(req.body.csvArray)
  res.status(201).json({
    message: 'Inseridos com sucesso!!!',
    data: users
  })
  .then(function(res){
    return res
  })
  .catch(error => {
    return error
  })
} */
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
  let transporter = nodemailer.createTransport({    
    service: "gmail",
    auth: {
      user: "grupopint21.22@gmail.com",
      pass: "vkuyejopkilwztxj"
      //znwydwlpiopvqduh
    }
  })
  let mailOptions = {
    from: "grupopint21.22@gmail.com",
    to: "rubencampos10@gmail.com",
    subject: "Nova Conta SafeRoom",
    html: "Ola " + nome + "!<br/><br/>" +
          "Estas são as credênciais para aceder à aplicação SafeRoom: <br/><br/><br/><br/>" + 
          email + 
          "<br/><br/>" + 
          password
  }
  transporter.sendMail(mailOptions, function(err, success){
    if(err){
      console.log(err)
    } else {
      console.log("Email enviado com sucesso!")
    }
  })
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

//------------------------------------------EditPassword------------------------------------------
controllers_Utilizador.editarPasswordUtilizador = async(req, res) => {
  const {email} = req.params;
  const { 
    password,
  } = req.body;
  const data = await Utilizador.update({
    password: password,
  },
  {
      where: {email: email}
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