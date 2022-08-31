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
router.post('/criar_users', utilizadores.bulkInsert)
//------------------Centros------------------
router.get('/centros', centros.listarCentros)
router.get('/visualizar_centro/:id_centro', centros.visualizarCentro)
router.post('/criar_centro', centros.adicionarCentro)
router.put('/editar_centro/:id_centro', centros.editarCentro)
router.post('/apagar_centro', centros.apagarCentro)
router.post('/criar_centro_bulk', centros.bulkInsert)
//------------------Cancelamentos------------------
router.get('/cancelamentos', cancelamentos.listarCancelamentos)

//------------------Salas------------------
router.get('/salas', salas.listarSalas)
router.get('/visualizar_sala/:id_sala', salas.visualizarSala)
router.post('/criar_sala', salas.adicionarSala)
router.put('/editar_sala/:id_sala', salas.editarSala)
router.post('/apagar_sala', salas.apagarSala)
//------------------Reservas------------------
router.get('/reservas', reservas.listarReservas)
router.get('/visualizar_reserva/:id_reserva', reservas.visualizarReserva)
router.post('/criar_reserva', reservas.adicionarReserva)
router.put('/editar_reserva/:id_reserva', reservas.editarReserva)
router.post('/apagar_reserva', reservas.apagarReserva)
//------------------Notificacoes------------------
router.get('/notificacoes', notificacoes.listarNotificacoes)

//------------------NotificacoesReservas------------------
router.get('/notificacoesReservas', notificacoesReservas.listarNotificacaoReserva)

//------------------UtilizadoresNotificacoes------------------
router.get('/utilizadoresNotificacoes', utilizadoresNotificacoes.listarUtilizadorNotificacao)

//------------------UtilizadoresCentros------------------
router.get('/utilizadoresCentros', utilizadoresCentros.listarUtilizadorCentro)

module.exports = router