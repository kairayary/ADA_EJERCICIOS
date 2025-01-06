// Crea un endpoint GET que reciba un parámetro de consulta (query
//     parameter) llamado name y devuelva una lista de usuarios cuyo nombre
//     coincida parcial o totalmente con el valor enviado. Si no se encuentra
//     ningún usuario, devuelve un arreglo vacío.

const express = require('express');
const app = express();

let usuarios = [
    { id: 1, name: 'Juan Pérez', email: 'juan@ejemplo.com' },
    { id: 2, name: 'Ana Gómez', email: 'ana@ejemplo.com' },
    { id: 3, name: 'Carlos López', email: 'carlos@ejemplo.com' },
    { id: 4, name: 'Juana Morales', email: 'juana@ejemplo.com' },
    { id: 5, name: 'JeanCarlos Mata', email: 'juana@ejemplo.com' }
];

app.get('/users',(req, res)=>{
    const {name} = req.query;
    if(!name){
        return res.status(400).json({error:'El parámetro "name" es obligatorio'});
    };
    const usuariosFiltrado = usuarios.filter(usuario=> 
        usuario.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );  

    res.status(200).json(usuariosFiltrado);
});

app.listen(3000, ()=>{
    console.log('Servidor ejecutándose en http://localhost:3000');
});