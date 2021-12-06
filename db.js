const mongoose = require('mongoose')
//require('dotenv').config({path: 'variables.env'});

console.log(process.env.URLDB);

mongoose.connect(process.env.URLDB,{
   useNewUrlParser: true, useUnifiedTopology: true
    /* useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true */
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar a MongoDB'))
db.once('open', function callback(){
    console.log('Conectado a MongoDB correctamente')
})

module.exports = db
