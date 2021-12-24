//desestructurar un constante algo que vine de express
const {response}=require('express');


const usuariosGet=(req=request, res=response) =>{

    const p=req.query;
    res.json({
       msg:'get API-controlador' ,
       p
    });
  }

 const usuariosPost=(req, res=response) =>{
    const body= req.body;
    res.json({
          msg:'Post API-controlador' ,
          body
        });
    }

 const usuariosPut=(req, res=response) =>{
        const id=req.params.id;
        res.json({
         msg:'Puwt API-controlador' ,
         id
      });
    }

    const usuariosDelete=(req, res=response) =>{
        res.json({
       msg:'Delete API-controlador' 
    });
  }
  const usuariosPatch=(req, res=response) =>{
    res.json({
       msg:'Patch API-controlador' 
    });
  }

//como se va exportar muchos controladores se va a mandar un objeto
  module.exports={
    usuariosGet,
    usuariosPatch,
    usuariosDelete,
    usuariosPost,
    usuariosPut
  }