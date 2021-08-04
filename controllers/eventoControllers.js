const Evento = require('../model/Evento')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Evento.find({}, (error, eventos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando Evento'
            })
        }
        return res.render('index', {eventos: eventos, 'title': 'Eventos disponibles'})
    })
}

//crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)  para mostrar por consola
    const evento = new Evento({
        eventoNombre: req.body.eventoNombre,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        Informacion: req.body.Informacion,
        musica: req.body.musica
    })
    evento.save(function(error,evento){
        if(error){
            return res.status(500).json({
                message: 'Error al crear alumno'
            })
        }
        res.redirect('/')
    })
}
//borrar
module.exports.borrar = (req, res)=> {
    const id = req.params.id
    Evento.findByIdAndRemove(id, (error, evento)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al borrar evento'
            })
        }
        res.redirect('/')
    })
}