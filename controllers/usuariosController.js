
const formularioLogin = ( req,res)=>{

    res.render('auth/login', {

        pagina: "login"
})
}
  
const formularioRegistro = ( req,res)=>{

    res.render('auth/registro', {

        pagina: "registrarce"
})
}




export  {
 
     formularioLogin,
     formularioRegistro
}
