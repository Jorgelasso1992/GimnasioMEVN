import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app= express();

// Conexion a base de datos
const mongoose = require('mongoose');
const uri = 'mongodb+srv://Ariel:ariel.1991@cluster0.cpe7o.mongodb.net/gimnasioMVEN?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to
   mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
   );
   


//antes de usar babel
// const express= require('express');
// const morgan= require('morgan');
// const cors= require('cors');
// const path=require('path');

//middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join((__dirname, 'public'))));


//Ruta

app.use('/api', require('./routes/usuarios'));

//se hace para verificar si hay coneccion
// app.get('/', function(req,res){

//     res.send('estoy vivo');

// });

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//puerto
//  app.listen(3000, function(){

//      console.log('el servidor escucha por el puerto 3000')
// })
app.set('puerto', process.env.PORT||3000);
app.listen(app.get('puerto'), function(){
    console.log('ejemplo de puerto en escucha '+ app.get('puerto'));
});