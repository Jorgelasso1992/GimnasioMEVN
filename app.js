import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';
import ejs from 'ejs';
//import mongoose from 'mongoose';  

/* const express = require('express'); 
const morgan = require('morgan');
const cors = require('cors');
const path = require('path'); */

const app = express();

//CONEXION A BASE DE DATOS
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/prueba';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then( 
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
    () => { console.log('Conectado a DB') }, 
    /** handle initial connection error */ 
    err => { console.log(err) }
);

app.use(morgan('tiny'));
app.use(cors());
app.set('view engine', 'ejs');

const clienteSchema = { 
    nombre: String, 
    descripcion: String, 
    usuarioId: String, 
    date: Date, 
    activo: Boolean 
};

const cliente = mongoose.model('clientes', clienteSchema )

app.get('/', (req, res) => {
    cliente.find({}, function(err, clientes) {
        res.render('index', {
            clientesList: clientes
        })
    })
})

app.use(express.static(__dirname + '/public'));

//RUTA

/* app.get('/', function (req, res) { 
    res.send('Hello World!'); 
});  */
/* app.listen(3000, function () { 
    console.log('Example app listening on port 3000!'); 
}); */

app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), function () { 
    console.log('App listening on port'+ app.get('puerto')); 
});