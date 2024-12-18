// Ejercicio 1: Creando un Endpoint GET para listar usuarios
// Consigna: Imagina que tienes una aplicación que necesita mostrar una lista de
// usuarios. Tu tarea es crear un endpoint GET en Express que responda con un
// listado de usuarios en formato JSON. Cada usuario debe tener un nombre
// (name) y un correo electrónico (email).
// Utiliza el método res.json() para enviar la respuesta. Asegúrate de que el
// servidor funcione correctamente en el puerto 3000 y de imprimir un mensaje en
// la consola al iniciarlo.

const express = require('express');
const app = express();

//middLeware

app.use(express.json());

app.get('/usuarios', (req,res)=>{
  res.status(200).json([{'name':'martha', 'email':'martha@gmail.com'},{'name':'mario', 'email':'mario@gmail.com'}])
});

app.listen(3000,()=>{
    console.log('Servidor conectado en http//localhosts:3000');
    
})