const express = require('express')
const app = express()
const db = require('./db')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'))
});

app.use(express.static('public'))

const eventos = require('./routes/eventos')
app.use(eventos)

//routes
app.get('/agregar', (req,res)=>{
    res.render('agregar', {
        'title': 'Agregar Evento'
    })
})

