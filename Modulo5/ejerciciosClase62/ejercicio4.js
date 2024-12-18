// Consigna: Dado el siguiente objeto JSON enviado en el cuerpo de la solicitud:
// {
//  "name": "Katherine Johnson",
//  "email": "katherine@example.com",
//  "age": 42
// }
// Crea un endpoint POST que use desestructuración para extraer name y email.
// Luego, responde con un mensaje que incluya estos valores. Si el cliente envía
// datos incompletos, responde con un error 400.

const express = require('express');
const app = express();

//MiddLeware
app.use(express.json());

//Endpoit post para extraer name y email
app.post('/usuarios',(req, res)=>{
    const {name, email} = req.body;

    if (!name || !email) {
        return res.status(400).json({
            mensaje:'Faltan datos: name y email son obligatorios'
        });  
    };
    //respuesta con personaje personalizado
    res.status(201).json({
       mensaje:  `Usuario creado exitosamente.`,
       usuario:{
        name,
        email
       },
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor conectado en http://localhost:3000');
});