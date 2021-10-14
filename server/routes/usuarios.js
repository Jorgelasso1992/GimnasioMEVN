import express from 'express';
const router=express.Router();

import Usuario from '../models/usuario';

//agregar una nota

router.post('/usuario-nuevo', async(req,res)=>{
 
    const body=req.body;
    try {
        const usuarioDB= await Usuario.create(body);//obtener datos desde el cliente
        res.status(200).json(usuarioDB);
    } catch (err) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            err
        })
    }
});

router.get('/usuario/:id', async(req,res)=>{

    const _id=req.params.id;
    try {
        const usuarioDB=await Usuario.findOne({_id});
        res.json(usuarioDB);

    } catch (err) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            err
        })
    }
});

router.get('/usuario', async(req,res)=>{
    try {
        const usuarioDB=await Usuario.find();
        res.json(usuarioDB);
    } catch (err) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            err
        })
    }
});

router.delete('/usuario/:id', async(req,res)=>{
    const _id=req.params.id;
    try {
        const usuarioDB=await Usuario.findByIdAndDelete({_id});
        if(!usuarioDB){
            return res.status(400).json({
                mensaje:'no se encontro el id indicado',
                err
            })
        }
        res.json(usuarioDB);
    } catch (err) {
        return res.status(500).json({
            mensaje:'Ocurrio un error',
            err
        });
    }
})

router.put('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const usuarioDB = await Usuario.findByIdAndUpdate(
            _id,
            body,
            {new: true});
        res.json(usuarioDB);
    } 
    catch (err) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err
        })
    }
});

module.exports=router;