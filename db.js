const mongoose = require('mongoose')
const url = 'mongodb://localhost/AppDB'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar a MongoDB'))
db.once('open', function callback(){
    console.log('Conectado a MongoDB correctamente')
})

module.exports = db