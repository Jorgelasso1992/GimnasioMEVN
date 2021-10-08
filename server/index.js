import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Para acceder al directorio actual 
import path from 'path';
//Conexión a la base de datos
import mongoose from 'mongoose';

const app = express();

//BD CONNECTION
const uri = 'mongodb+srv://dbGYM:GimnasioMEVN@cluster1.iibwx.mongodb.net/entrenador?authSource=admin&replicaSet=atlas-9moey3-shard-0&readPreference=primary&ssl=true'; 
const options = {useNewUrlParser: true, useUnifiedTopology: true}; 

// Or using promises 
mongoose.connect(uri, options).then( 
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
  () => { console.log('Conectado a DB') }, 
  /** handle initial connection error */ 
  err => { console.log(err) } 
);


//MIDDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS

app.use('/api', require('./routes/entrenador')); 

app.get("/", (req, res) => {
  //res.send("Hola Mundo con nodemon cambia automaticamente el servidor");
  res.sendFile(path.resolve("../client/public/index.html"));
});

app.post("/", (req, res) => {
  //res.send("Hola Mundo con nodemon cambia automaticamente el servidor");
  res.sendFile(path.resolve("../client/public/index.html"));
});

//Cargar las peticiones de archivos del server al client
app.get("/css/*", (req, res) => {
  let css = req.url.replace(/\//g, '').replace("css", '').trim().toLowerCase();
  switch (css) {
    default:
      res.sendFile(path.resolve("../client/dist/css/" + css + ""));
      break;
  }
});

app.get("/js/*", (req, res) => {
  let js = req.url.replace(/\//g, '').replace("js", '').trim().toLowerCase();
  switch (js) {
    default:
      res.sendFile(path.resolve("../client/dist/js/" + js + ""));
      break;
  }
});

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//PUERTOS
//Esta es la configuración para puerto asignado estáticamente
// app.listen(3000, () => {
//   console.log("El servidor escucha por el puerto 3000");
// });

//Esta es la configuración para puerto asignado automáticamente
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('El servidor escucha por el puerto: ' + app.get('puerto'));
});

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost:27017/todoapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// var db = mongoose.connection;
// db.on("open", () => {
//   console.log("Connected to mongoDB");
// });
// db.on("error", error => {
//   console.log(error);
// });

// // import todo schema as model
// let todoModel = require("./todo_schema");



// // add todo
// app.post("/todo/add", (req, res) => {
//   let newTodo = new todoModel();
//   newTodo.title = req.body.todo;
//   newTodo.completed = false;
//   newTodo.save(err => {
//     if (err) {
//       console.log(err);
//       res.send("Error while adding Todo");
//     } else {
//       console.log(newTodo);
//       res.send("Todo added");
//     }
//   });
// });

// // FETCH TO-DO

// // completed
// app.get("/todo/completed", (req, res) => {
//   todoModel.find({ completed: true }, (err, todos) => {
//     if (err) {
//       res.send("Error while fetching Todos");
//     } else {
//       res.json(todos);
//     }
//   });
// });

// // uncompleted
// app.get("/todo/uncompleted", (req, res) => {
//   todoModel.find({ completed: false }, (err, todos) => {
//     if (err) {
//       res.send("Error while fetching Todos");
//     } else {
//       res.json(todos);
//     }
//   });
// });

// // update
// app.post("/todo/complete/:id", (req, res) => {
//   todoModel.findByIdAndUpdate(
//     req.params.id,
//     { completed: true },
//     (err, todo) => {
//       if (!err) {
//         res.send("Good Work");
//       }
//     }
//   );
// });

// // delete todo
// app.delete("/todo/:id", (req, res) => {
//   let query = { _id: req.params.id };
//   todoModel.deleteOne(query, err => {
//     if (err) {
//       res.send("Error while deleting todo");
//     } else {
//       res.send("Todo deleted");
//     }
//   });
// });