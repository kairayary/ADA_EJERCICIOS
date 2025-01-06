// Crea un endpoint GET que devuelva la lista de usuarios ordenada
// alfabéticamente por su nombre.
// • Si se proporciona el parámetro de consulta order con el valor desc,
// ordena la lista en orden descendente.
// • Si no se especifica order o su valor es diferente de desc, ordena en
// orden ascendente.

const express = require('express');
const app = express();

let usuarios = [
    {"id": 1, "name": "Ana", "email": "ana@gmail.com"}, 
    {"id": 2, "name": "Juan", "email": "juan@gmail.com"},
    {"id": 2, "name": "Candy", "email": "candy@gmail.com"}
];

app.get('/usuarios', (req,res)=>{
    const {orden}= req.query;

    //para no modificar el array original hacemos una copia
    let usuariosOrdenados = [...usuarios];

    //ordenar alfabeticamente los usuarios
    usuariosOrdenados.sort((a,b)=>{
        if (orden === 'desc') {
            return b.name.localeCompare(a.name);
        };
        return a.name.localeCompare(b.name);
    });
    res.json(usuariosOrdenados);
});

app.listen(3000, ()=>{
    console.log('Servidor corriendo en http://localhost:3000');
})