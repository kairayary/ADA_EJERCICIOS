// Consigna: Ahora vamos a permitir que el cliente agregue nuevos usuarios a la
// lista. Tu tarea es crear un endpoint POST que reciba los datos del usuario desde
// el cuerpo de la solicitud en formato JSON. Los datos deben incluir name y email.
// Si alguno de estos datos falta, el servidor debe responder con un error (código
// 400).
// Recuerda usar express.json() como middleware para procesar los datos del
// cuerpo de la solicitud.


const express = require('express');
const app = express();

//MiddLeware

app.use(express.json());

//Endpoint GET para listar usuarios

const usuarios = [
    {name:'martha',email:'martha@gmail.com'},
    {name:'mario', email:'mario@gmail.com'}
];

app.post('/usuarios/agregar',(req, res)=>{
    const {name, email}= req.body;

    //Validación de datos
    if (!name || !email) {
        return res.status(400).json('Faltan datos');
        
    }
        const nuevoUsuario = {name, email};
        usuarios.push(nuevoUsuario)
        res.status(201).json({mensaje:'Usuarios creado exitosamente', usuario: { name, email }})
    
});

// Endpoint GET para listar usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
}); 

app.listen(3000, () => {
    console.log('Servidor conectado en http://localhost:3000');
});