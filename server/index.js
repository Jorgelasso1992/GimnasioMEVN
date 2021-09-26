import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors';
// Para acceder al directorio actual 
import path from 'path';
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

const app = express();


//MIDDLEWARES
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); 
//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS
app.get("/", (req, res) => {
  res.send("Hola Mundo con nodemon cambia automaticamente el servidor");
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