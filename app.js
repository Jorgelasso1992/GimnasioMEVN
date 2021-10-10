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
const uri = 'mongodb+srv://atlas_user:colombiauser@cluster0.9nbjf.mongodb.net/Proyecto';
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

let entrar = "Entrar";
let registrarse = "";
let registrarse_1 = "Registrarse";

/* app.get('/', (req, res) => {
     cliente.find({activo: 'true'}, function(err, clientes) {
        if (err){
            res.render('index', { data: {
                clientesList: "Bienvenido", entrar: "Entrar", registrarse_1: registrarse_1
            }});
        }
        else{res.render('index', { data: {
            clientesList: clientes, entrar: entrar, registrarse: registrarse  
        }});
    }
    })
}) */

/* app.get('/', (req, res) => {
    cliente.find({activo: 'true'}, function(err, clientes) {
       if (clientes){
           res.render('index', { data: {
                clientesList: clientes, entrar: entrar, registrarse: registrarse 
           }});
       }
       else{res.render('index', { data: {
                entrar: "iniciar sesión", registrarse: registrarse_1 
       }});
   }
   })
}) */


app.get('/', (req, res) => {
    cliente.find({activo: 'true'}, function(err, clientes) {
        if (!clientes.length) {res.render('index', { data: {
            clientesList: clientes, entrar: "Iniciar Sesión", registrarse: registrarse_1  
        }});}
        if (clientes.length) {res.render('index', { data: {
            clientesList: clientes, entrar: entrar, registrarse: registrarse  
        }});}
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