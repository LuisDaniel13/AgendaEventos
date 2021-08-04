const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventoSchema = new Schema ({
    eventoNombre: String,
    fecha: String,
    lugar: String,
    Informacion: String,
    musica: String
}, {versionKey:false})


module.exports = mongoose.model('eventos', eventoSchema)