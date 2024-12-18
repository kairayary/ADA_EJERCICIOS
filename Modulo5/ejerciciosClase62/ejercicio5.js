// Consigna: Crea un servidor que:
// 1. Devuelva un mensaje de bienvenida (¡Bienvenida al servidor de Express!) al
// acceder a la ruta raíz /.
// 2. Devuelva un error 404 (Ruta no encontrada) para cualquier ruta que no
// esté definida.

const express = require('express');
const app = express();

//ruta raiz
app.get('/',(req, res)=>{
    res.send('Bienvenido al Servidor Express');   
});

//MiddLeware

app.use((req, res)=>{
    res.status(404).send('Error:Ruta no encontrada')
});

app.listen(3000, () => {
    console.log('Servidor conectado en http://localhost:3000');
});