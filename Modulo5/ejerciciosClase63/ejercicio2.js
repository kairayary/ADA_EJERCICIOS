// Crea un endpoint DELETE para eliminar un usuario de la lista utilizando un
// parámetro dinámico :id en la URL (por ejemplo, /users/1).
// • Si el usuario no existe, responde con un error 404.
// • Si el usuario es eliminado exitosamente, responde con un mensaje
// confirmando la eliminación.

const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [
    {"id": 1, "name": "Ana", "email": "ana@gmail.com"}, 
    {"id": 2, "name": "Juan", "email": "juan@gmail.com"}
];

app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    let user = usuarios.find(u => u.id === parseInt(id))
    if (!user) {
        res.status(404).send("El usuario no existe")
    } 
    usuarios.splice((id - 1), 1);
    res.status(200).send("El usuario fue eliminado exitosamente.")
});

app.listen(3000, () => {
    console.log("Servidor conectado en http://localhost:3000");
});