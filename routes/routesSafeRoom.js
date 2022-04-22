const express = require('express')
const router = express.Router()

const utilizadores = require('../controllers/utilizadoresController')
const centros = require('../controllers/centrosController')
const cancelamentos = require('../controllers/cancelamentosController')
const salas = require('../controllers/salasController')
const reservas = require('../controllers/reservasController')
const notificacoes = require('../controllers/notificacoesController')
const notificacoesReservas = require('../controllers/NotificacaoResController')
const utilizadoresNotificacoes = require('../controllers/UserNotificacaoController')
const utilizadoresCentros = require('../controllers/UserCentroController')

router.get('/login', (req, res) => {
  res.send('Criadooo')
})

//------------------Utilizadores------------------
router.get('/users', utilizadores.listarUtilizadores)

//------------------Centros------------------
router.get('/centros', centros.listarCentros)

//------------------Cancelamentos------------------
router.get('/cancelamentos', cancelamentos.listarCancelamentos)

//------------------Salas------------------
router.get('/salas', salas.listarSalas)

//------------------Reservas------------------
router.get('/reservas', reservas.listarReservas)

//------------------Notificacoes------------------
router.get('/notificacoes', notificacoes.listarNotificacoes)

//------------------NotificacoesReservas------------------
router.get('/notificacoesReservas', notificacoesReservas.listarNotificacaoReserva)

//------------------UtilizadoresNotificacoes------------------
router.get('/utilizadoresNotificacoes', utilizadoresNotificacoes.listarUtilizadorNotificacao)

//------------------UtilizadoresCentros------------------
router.get('/utilizadoresCentros', utilizadoresCentros.listarUtilizadorCentro)

module.exports = router