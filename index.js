// // extrayendo expres
//const express = require('express'); //formato comman js antiguo 
// requiere -- buscara en dependencias en el package.js
 
import express  from "express"; 

import usuariosRouter from "./routers/usuariosRouter.js"; // mandando a llamar routas

const app = express(); // extraer express.  y asignaor a una nueva varibale

 //habilitando el html pug de la aplicacion
 app.set('view engine', 'pug');
 app.set('views', './views');


const  port = 3000;// declarando el puerto



/*app.get("/", usuariosRouter);
app.get("/ruta", usuariosRouter);

get busca rutas en especifico mejor use , busca varias
*/
 
app.use('/auth', usuariosRouter); //mostrado las rutas del html
app.use(express.static('public')); // carpeta de css Estatico

//activar el puerto
app.listen(port,()=>{
    console.log(`puerto funcionando ${port}`);
});