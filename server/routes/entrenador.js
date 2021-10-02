import express from 'express'; 
const router = express.Router(); 

// importar el modelo entrenador 

import Entrenador from '../models/entrenador'; 

// Agregar un entrenador 
router.post('/nuevo-entrenador', async(req, res) => { 
    const body = req.body; 
    
    try { 
        const entrenadorDB = await Entrenador.create(body); 
        res.status(200).json(entrenadorDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
}); 

// Get con parámetros 
router.get('/entrenador/:id', async(req, res) => { 
    const _id = req.params.id; 

    try { 
        const entrenadorDB = await Entrenador.findOne({_id}); 
        res.json(entrenadorDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        })
    } 
});

// Get con todos los documentos 
router.get('/entrenador', async(req, res) => { 
    try { 
        const entrenadorDB = await Entrenador.find(); 
        res.json(entrenadorDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

// Delete eliminar una nota 
router.delete('/entrenador/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const entrenadorDB = await Entrenador.findByIdAndDelete({_id}); 
        if(!entrenadorDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } res.json(entrenadorDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

// Put actualizar una nota 
router.put('/entrenador/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const entrenadorDB = await Entrenador.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
        res.json(entrenadorDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

// Exportamos la configuración de express app 
module.exports = router;