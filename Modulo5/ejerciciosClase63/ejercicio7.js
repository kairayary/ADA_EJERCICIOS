// Crea un endpoint GET que reciba dos parámetros de consulta (minAge y
//     maxAge) y devuelva una lista de usuarios cuya edad esté en ese rango.
//     1. Si no se proporcionan ambos parámetros, responde con un error
//     400.
//     2. Si no hay usuarios en ese rango, devuelve un arreglo vacío.
//     3. Asegúrate de incluir un campo age en los usuarios existentes para
//     realizar este ejercicio.


const express = require('express');
const app = express();

let usuarios = [
    { name: 'Juan Pérez', email: 'juan@ejemplo.com', age: 25 },
    { name: 'Ana Gómez', email: 'ana@gmail.com', age: 30 },
    { name: 'Carlos López', email: 'carlos@ejemplo.com', age: 20 },
    { name: 'Juana Morales', email: 'juana@gmail.com', age: 35 },
    { name: 'JeanCarlos Mata', email: 'jeancarlos@ejemplo.com', age: 40 }
];

//endpoint para filtrar usuarios por edad

app.get('/users/age', (req, res) => {
    const { minAge, maxAge } = req.query;

    //validación de los parámetros
    if (!minAge || !maxAge) {
        return res.status(400).json({
            error: 'Es necesario proporcionar los parámetros minAge y maxAge'
        });
    };

    //validar que los parámetros sean números
     const min = parseInt(minAge, 10);
     const max = parseInt(maxAge, 10);

     if (isNaN(min) || isNaN(max)) {
        return res.status(400).json({
            error: 'Los parámetros minAge y maxAge deben ser números'
        });
     };
    //Filtrar usuarios qie esten dentro del rango de edad
    const usuariosFiltrados = usuarios.filter(usuario => usuario.age >= min && usuario.age <= max);

    //lista filtrada
    res.json(usuariosFiltrados);
});


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});