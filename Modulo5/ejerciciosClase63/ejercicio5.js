// Crea un endpoint POST que permita agregar múltiples usuarios en una
// sola solicitud. El cuerpo de la solicitud debe ser un arreglo de objetos con
// name y email.
// • Si algún objeto del arreglo no tiene los campos requeridos,
// responde con un error 400 indicando específicamente qué usuario
// es inválido.
// • Si todo está correcto, agrega los usuarios a la lista y responde con
// la lista actualizada.


const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [
    {  name: 'Juan Pérez', email: 'juan@ejemplo.com' },
    {  name: 'Ana Gómez', email: 'ana@gmail.com' },
    {  name: 'Carlos López', email: 'carlos@ejemplo.com' },
    {  name: 'Juana Morales', email: 'juana@gmail.com' },
    { name: 'JeanCarlos Mata', email: 'juana@ejemplo.com' }
];
app.post(('/users/add'), (req,res)=>{
  const nuevosUsuarios = req.body;

  const usuariosNoValidos = nuevosUsuarios.filter((usuario) => !usuario.name || !usuario.email);
  if (usuariosNoValidos.length>0) {
    return res.status(400).json({
        error:'Los siguientes usuarios son inválidos',
        detalles:usuariosNoValidos.map((usuario, index)=>{
            index, 
            usuario
        })
    });
    
  };
  usuarios = [...usuarios, ...nuevosUsuarios];

  res.status(201).json({mensaje:'Usuarios agregados correctamente.', usuarios })
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});