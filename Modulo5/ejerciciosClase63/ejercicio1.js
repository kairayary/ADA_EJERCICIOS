// Crea un endpoint PUT para actualizar la información de un usuario
// existente en la lista. El cliente debe enviar el ID del usuario como
// parámetro dinámico en la URL (por ejemplo, /users/1) y los nuevos datos
// del usuario en el cuerpo de la solicitud en formato JSON.
// • Si el usuario no existe, responde con un error 404.
// • Si los datos enviados son incompletos (falta name o email),
// responde con un error 400.
// • Si todo está correcto, actualiza los datos del usuario y responde con
// el usuario actualizado.



const express = require('express');
const app = express();
app.use(express.json());
let usuarios = [
    {"id": 1, "name": "Ana", "email": "ana@gmail.com"}, 
    {"id": 2, "name": "Juan", "email": "juan@gmail.com"}
]
app.put('/users/:id', (req, res) => {
    const {name, email} = req.body
    const {id} = req.params
    let user = usuarios.find(u => u.id === parseInt(id))
    if (!user) {
        res.status(404).send("El usuario no existe")
    } 
    if (!name || !email) {
        res.status(400).send('Falta completar uno de los datos')
    }
    res.status(200).json({message: 'Usuario actualizado: ', user: { id, name, email }})
})
app.listen(3000, () => {
    console.log("Servidor conocetado en http://localhost:3000");
})