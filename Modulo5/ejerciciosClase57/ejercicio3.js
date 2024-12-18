// 1. Modifica tu servidor para que responda con información de un usuario
// específico basado en el ID proporcionado en la URL.
// 2. Si se realiza una solicitud GET a /usuarios/1, el servidor debe devolver el
// usuario con id = 1.
// 3. Si el usuario no existe, el servidor debe responder con un código 404 y el
// mensaje "Usuario no encontrado".
// Ejemplo:
// • Solicitud: GET /usuarios/2
// • Respuesta: { "id": 2, "nombre": "Carlos" }
// Pistas:
// • Utiliza req.url para capturar el ID en la URL.
// • Usa res.statusCode = 404 para manejar el error si el usuario no

import * as http from 'http';


// const ususarios = [{id:1, nombre: 'Mary'}, {id:2, nombre: 'Roxy'}, {id:3, nombre:'Ivan'}];
const usuarios = [
    { id: 1, nombre: 'Mary' },
    { id: 2, nombre: 'Roxy' },
    { id: 3, nombre: 'Ivan' },
];  
const server = http.createServer((req, res) => {
    
    if (req.method === 'GET' && req.url === '/usuarios') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify([{ id: 1, nombre: 'Mary' }, { id: 2, nombre: 'Roxy' }, { id: 3, nombre: 'Ivan' }]))
    } else if (req.method === 'GET' && req.url?.startsWith('/usuarios')) {
        const part = req.url.split('/');
        const id = parseInt(part[2], 10);
        if (!isNaN(id)) {
            const usuario = usuarios.find(u => u.id === id);
            if (usuario) {
                res.writeHead(200, { 'content-type': 'application/json' });
                res.end(JSON.stringify(usuario))
            } else {
                res.writeHead(404, { "content-type": 'text/plain' });
                res.end('Usuario no encontrado');
            }
        } else {
            res.writeHead(400, { 'content-type': 'text/plain' });
            res.end('ID solicitado no es válido')
        }

    }else{
        res.writeHead(400, {'content-type':'text/plain'});
        res.end('Recurso no encontado');
    };
});

server.listen(3000,()=>{
    console.log('Servidor ejecutándose en http://localhost:3000');
    
})