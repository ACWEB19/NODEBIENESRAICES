// // extrayendo expres
//const express = require('express'); //formato comman js antiguo 
// requiere -- buscara en dependencias en el package.js
 
import express  from "express"; 

import usuariosRouter from "./routers/usuariosRouter.js"; // mandando a llamar routas

const app = express(); // extraer express.  y asignaor a una nueva varibale

const  port = 3000;// declarando el puerto


/*app.get("/", usuariosRouter);
app.get("/ruta", usuariosRouter);

get busca rutas en especifico mejor use , busca varias
*/
 
app.use('/', usuariosRouter);


//activar el puerto
app.listen(port,()=>{
    console.log(`puerto funcionando ${port}`);
});