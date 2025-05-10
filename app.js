const express = require('express'); //Importamos express ala aplicacion app.js
const app = express(); // marcamos el punto de partida de la aplicacion

const PORT= process.env.PORT || 3000; //establecemos la varible de entrono que escuche en el puerto, de lo contrario usara 3000

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto 3000");
})

 //Primer ruta
app.get("/", (req, res) => {
    res.send(`Aplicacion corriendo en el puerto ${PORT}`); //Mostramos el mensaje al conectarnos a la ruta
})

