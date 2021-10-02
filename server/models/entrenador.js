import mongoose from 'mongoose'; 
const Schema = mongoose.Schema; 

const entrenadorSchema = new Schema({
    nombres: String, 
    apellidos: String,
    email: { type: String, required: [true, 'Completa este campo'] },
    password: { type: String, required: [true, ''] },
    confirmpass: { type: String, required: [true, ''] },
    id: String,
    tel: String 
});

// Convertir a modelo
 const Entrenador = mongoose.model('Entrenador', entrenadorSchema); 
 export default Entrenador;