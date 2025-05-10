const express = require('express'); //Importamos express ala aplicacion app.js
const app = express(); // marcamos el punto de partida de la aplicacion
const port = 3000; //establecemos el puerto de ecucha en el 3000

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto 3000");
})

 //Primer ruta
app.get("/", (req, res) => {
    res.send("Hola mundo"); //Mostramos el mensaje al conectarnos a la ruta
})

