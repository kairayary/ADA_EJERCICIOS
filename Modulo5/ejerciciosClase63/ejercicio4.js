// Crea un endpoint GET que reciba un parámetro de consulta (query
//     parameter) llamado domain. El endpoint debe contar cuántos usuarios
//     tienen un correo electrónico que pertenezca a ese dominio (por ejemplo,
//     @example.com) y devolver el resultado.
//     • Si no se proporciona el parámetro domain, responde con un error
//     400.
//     • Si ningún usuario tiene un correo con ese dominio, devuelve 0.

const { error } = require('console');
const express = require('express');
const app = express();

let usuarios = [
    { id: 1, name: 'Juan Pérez', email: 'juan@ejemplo.com' },
    { id: 2, name: 'Ana Gómez', email: 'ana@gmail.com' },
    { id: 3, name: 'Carlos López', email: 'carlos@ejemplo.com' },
    { id: 4, name: 'Juana Morales', email: 'juana@gmail.com' },
    { id: 5, name: 'JeanCarlos Mata', email: 'juana@ejemplo.com' }
];

app.get('/users/domain', (req,res)=>{
    const {domain}= req.query;

    if(!domain){
        return res.status(400).json({error:'El parámetro "domain" es obligatorio'})
    };

    const usuariosFiltrados = usuarios.filter(usuario => 
      //Se usa email.endsWith(domain) para encontrar usuarios cuyo correo termine con el dominio dado 
        usuario.email.endsWith(domain)).length;
    res.status(200).json({domain, usuariosFiltrados});
});

app.listen(3000,()=>{
    console.log('Servidor ejecutándose en http://localhost:3000');
})