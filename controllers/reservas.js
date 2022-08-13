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
controllers_Reserva.visualizarReserva = async(req, res) => {
  const {id_reserva} = req.params;
  const data = await Reserva.findAll({
    where: {id_reserva: id_reserva}
  })
  .then(function(data){
    return data
  })
  .catch(err => {
    return err
  })
  res.json({Success: true, data, data})
}

//---------------Add--------------------
controllers_Reserva.adicionarReserva = async(req, res) => {
  const { 
    id_user,
    id_sala,
    data,
    hora_inicio,
    hora_fim,
    limpeza,
    notas
  } = req.body;
  const dataReserva = await Reserva.create({
    id_user: id_user,
    id_sala: id_sala,
    data: data,
    hora_inicio: hora_inicio,
    hora_fim: hora_fim,
    limpeza: limpeza,
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
    data: dataReserva
  });
}

//-------------Edit-------------
controllers_Reserva.editarReserva = async(req, res) => {
  const { id_reserva } = req.params;
  const { 
    id_user,
    id_sala,
    data,
    hora_inicio,
    hora_fim,
    limpeza,
    notas
  } = req.body;
  const dataReserva = await Reserva.update({
    id_user: id_user,
    id_sala: id_sala,
    data: data,
    hora_inicio: hora_inicio,
    hora_fim: hora_fim,
    limpeza: limpeza,
    notas: notas
  },
  {
    where: {id_reserva: id_reserva}
  })
  .then(function(data){
      return data;
  })
  .catch(error => {
      return error;
  })
  res.json({success: true, data: dataReserva, message: "Atualizado com sucesso!"});
}

//-------------Delete-------------
controllers_Reserva.apagarReserva = async(req, res) => {
const {id_reserva} = req.body;
const del = await Reserva.destroy({
  where: { id_reserva: id_reserva }
})
.catch(error =>{
  console.log(error)
  return error
})
res.json({
  success: true, 
  deleted: del, 
  message: "Reserva apagada com sucesso!"})
}

module.exports = controllers_Reserva