const express = require('express')
const router = express.Router()

const eventoController = require('../controllers/eventoControllers')

//mostrar agregar
/*router.get('/crud', (req,res)=>{
    res.render('crud')
});*/

//mostrar todos los eventos
router.get('/', eventoController.mostrar)
//crear evento
router.post('/crear', eventoController.crear)
//borrar evento
router.get('/borrar/:id', eventoController.borrar)
module.exports = router
