require('dotenv').config();


//El cors nos permite proteger nuestro servidor 
const express = require('express');
const cors = require('cors');

const app = express();

class Server{

constructor(){
    this.app=express();
    this.port=process.env.PORT;
    this.usuariosPath='/api/usuarios';
    //Middlewares
    //Son:funciones que le van añadir otra funcionalidades al web server

    //middlewares
    this.middlewares();


    //Rutas de mi aplication
    this.routes();
}

middlewares(){

    //CORS
     this.app.use(cors());

     //Lectura

     this.app.use(express.json());
    //de esta manera cualquier informacion que venga en put post  delete la va intentar serializar a un formato json

    //Directorio publico 
   this.app.use(express.static('public'));
}
  
routes(){
    this.app.use( this.usuariosPath, require('../routes/usuarios'));   
}


listen(){
this.app.listen(this.port,()=>{
    console.log('Servidor corriendo',this.port);
});
}

}

module.exports=Server;