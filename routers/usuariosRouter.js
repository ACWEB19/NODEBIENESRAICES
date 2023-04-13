import express from "express";

import {formularioLogin} from '../controllers/usuariosController.js';


 //archvo de rotS
const router= express.Router();
 
router.get('/',(req, res)=>{

        res.json({msg: 'json hola dundo'})
});


router.get('/login',formularioLogin);


 
router.post('/',function(req,res){
          
      res.json({msg: 'respuesta tipo post'})
});
//exportando router



//simplificando codigo

/*
router.route('/')
.get('/',function(req, res){

      res.json({msg: 'json hola dundo'})
})
router.post('/',function(req,res){
          
      res.json({msg: 'respuesta tipo post'})
})  ;*/

  



export default router;