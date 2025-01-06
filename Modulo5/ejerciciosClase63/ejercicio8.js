// Crea un endpoint GET /users/stats que devuelva las siguientes
// estadísticas sobre los usuarios:
// 1. Cantidad total de usuarios.
// 2. Edad promedio de los usuarios.
// 3. Usuario más joven.
// 4. Usuario más viejo.


const express = require('express');
const app = express();


let usuarios = [
    { id: 1, name: 'Anna', email: 'anna@gmail.com', age: 25 },
    { id: 2, name: 'Juana', email: 'juana@gmail.com', age: 32 },
    { id: 3, name: 'Natalia', email: 'natalia@gmail.com', age: 16 },
    { id: 4, name: 'Luis', email: 'luis@gmail.com', age: 45 }
]; 
//endpoint para estadisticas de usuarios
app.get('/users/stats', (req,res)=>{
    if (usuarios.length === 0) {
        return res.status(404).json({error: 'No hay resgistro de usuarios'});
    };

    const usuariosTotales = usuarios.length;

    // Edad Promedio

    const sumarEdades = usuarios.reduce((ac, usuario)=>ac + usuario.age, 0);
    const edadPromedio = (sumarEdades/usuariosTotales);

    //Usuario más joven

    const usuarioJoven = usuarios.reduce((joven, usuario)=> usuario.age < joven.age ? usuario: joven);

    //Usuario más viejo

    const usuarioViejo = usuarios.reduce((viejo, usuario)=> usuario.age> viejo.age ? usuario : viejo);

    //Repuesta
    res.json({
        usuariosTotales,
        edadPromedio: parseFloat(edadPromedio),
        usuarioJoven,
        usuarioViejo
    });
});


app.listen(3000, () =>{
    console.log('Servidor corriendo en http://localhost:3000');
    
})