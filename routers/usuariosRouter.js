import express from "express";
 //archvo de rotS
const router= express.Router();

router.get('/',function(req, res){

        res.json({msg: 'json hola dundo'})
});

router.get('/nosotros',function(req,res){

      res.send('rutaalterna llamada nostros')
});

router.post('/',function(req,res){
          
      res.json({msg: 'respuesta tipo post'})
});
//exportando router

export default router;