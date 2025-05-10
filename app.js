require('dotenv').config();
const express = require('express'); //Importamos express ala aplicacion app.js
const app = express(); // marcamos el punto de partida de la aplicacion

const fs = require('fs'); //Modulo para trabajar con archivos des de Node Js FileSystem

const path = require('path');//ruta de los archivos des de los que vamos a acceder



const PORT= process.env.PORT || 3000; //establecemos la varible de entrono que escuche en el puerto, de lo contrario usara 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

console.log(PORT)
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto 3000");
})

 //Primer ruta
app.get("/", (req, res) => {
    res.send(`Aplicacion corriendo en el puerto ${PORT}`); //Mostramos el mensaje al conectarnos a la ruta
})


app.get("/user/:id", (req, res) => {
    const  userId = req.params.id;
    res.send(`El id es ${userId}`);
})

app.get("/search", (req, res) => {
    const termino = req.query.termono || "No especificado";
    const category = req.query.categoria || "No especificado";

    res.send(`Los terminos buscados son ${termino} y la categoria es ${category}`);
})

app.post("/api/data", (req, res) => {
    const  data = req.body;;

    if(!data || Object.keys(data).length === 0){
        res.status(400).json({error: "No ser resivieron datos"});
    }

    res.status(200).json({
        message: "Datos recibidos",
        data: data
    });
    console.log(data)
})

// Ruta POST para formulario
app.post("/form", (req, res) => {
    const name = req.body.nombre || "Anónimo"; // CORREGIDO: ortografía
    const email = req.body.email || "No especificado";

    res.json({
        message: "Formulario recibido",
        data: {
            name,
            email
        }
    });
    console.log(name)
    console.log(email)
});