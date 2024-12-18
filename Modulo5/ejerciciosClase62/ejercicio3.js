// Consigna: En este ejercicio, vamos a permitir que el cliente busque información
// de un usuario por su ID. Crea un endpoint GET que reciba un parámetro
// dinámico :id en la URL (por ejemplo, /users/1). Usa req.params para capturar
// este valor y busca al usuario correspondiente en una lista. Si no se encuentra el
// usuario, responde con un error 404.

const express = require('express');
const app = express();

//MiddLeware

app.use(express.json());

const usuarios = [
    {id: 1, name:'martha', email:'martha@gmail.com'},
    {id: 2, name:'mario', email:'mario@gmail.com'}
];

app.get('/usuarios/:id', (req, res)=>{
    const {id}= req.params;
    const usuarioBuscado = usuarios.find(usuario=>usuario.id ===parseInt(id));

    if (!usuarioBuscado) {
      return  res.status(400).send('Usuario no encontrado');
    }
    res.json(usuarioBuscado)
});

app.listen(3000, () => {
    console.log('Servidor conectado en http://localhost:3000');
});