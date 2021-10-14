import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const usuarioSchema=new Schema({
    nombre:{type:String, required:[true, 'Nombre requerido']},
    apellido:String,
    correo:{type:String, required:[true, 'correo requerido']},
    contraseña: String,
    date:{type:Date, default:Date.now},
    activo:{type:Boolean, default:true}

})

//convertir a modelo

const Usuario=mongoose.model('Usuario', usuarioSchema);
export default Usuario;