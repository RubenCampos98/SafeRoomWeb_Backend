const express = require('express')
const router = express.Router()

const utilizadores = require('../controllers/utilizadores')
const centros = require('../controllers/centros')
const cancelamentos = require('../controllers/cancelamentos')
const salas = require('../controllers/salas')
const reservas = require('../controllers/reservas')
const notificacoes = require('../controllers/notificacoes')
const notificacoesReservas = require('../controllers/notificacoes_reservas')
const utilizadoresNotificacoes = require('../controllers/utilizadores_notificacoes')
const utilizadoresCentros = require('../controllers/utilizadores_centros')

router.get('/login', (req, res) => {
  res.send('Criadooo')
})

//------------------Utilizadores------------------
router.get('/users', utilizadores.listarUtilizadores)
router.get('/visualizar_user/:id_user', utilizadores.visualizarUtilizador)
router.post('/criar_user', utilizadores.adicionarUtilizador)
router.put('/editar_user/:id_user', utilizadores.editarUtilizador)
router.post('/apagar_user', utilizadores.apagarUtilizador)
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