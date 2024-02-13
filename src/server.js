// importando Express
const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require("./routes/user_router");
const CONFIG = require("./config/config");
const routes = require('./routes/index'); 

const port = 3000;// variable escuchando en el puerto 3000
const app= express();// instanciar express para obtener los metodos de express

// convertir a JSON de manera general: algo bien!
app. use(bodyParse.json());//Parseo de informacion a JSON
app.use('/api', routes)// usar el prefijo /api


//MONGODB Coneccion
mongoose.connect(CONFIG.MONGODB_URL)
.then(()=>console.log("conected to mongoDB"))
.catch((error)=> console.log(error)); //CONECTAR A LA BD CON UNA VARIABLE DE AMBIENTE: mongodb_URI

// conexion a la BD mongoDB
app.listen(port, async()=>{
    console.log("Escuchando en el puerto 3000 we");
})