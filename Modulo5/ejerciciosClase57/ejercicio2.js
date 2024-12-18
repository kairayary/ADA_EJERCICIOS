// Ejercicio 2: Ruta para Obtener Información de Usuarios (GET)
// Descripción:
// 1. Amplía tu servidor para manejar una solicitud GET en la ruta /usuarios.
// 2. Cuando el servidor reciba una solicitud en esta ruta, debe responder con
// un array de objetos JSON que contenga al menos 3 usuarios con los
// campos id y nombre.
// 3. Asegúrate de enviar el encabezado Content-Type: application/json para
// que el cliente sepa que está recibiendo datos en formato JSON.


import * as http from 'http';

const server = http.createServer((req, res)=>{

    console.log(`Método: ${req.method}, URL: ${req.url}`);
    if(req.method === 'GET' && req.url === '/usuarios'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify([{id:1, nombre:'Maria'},{id:2, nombre:'Etnio'},{id:3, nombre:'Roxy'}]));

    }else if (req.method === 'POST' && req.url === '/usuarios'){
        let body = '';
        req.on('data', chunk =>{
            body += chunk.toString();
        });
     req.on('end',()=>{
        const nuevoUsuario = JSON.parse(body);
        res.writeHead(201,{'content-type': 'application/json'});
        res.end(JSON.stringify(nuevoUsuario))
     });
    }else{
        res.writeHead(404,{'content-type': 'text/plain'});
        res.end('Recurso no encontrado')
    };
});

server.listen(3000, ()=>{
    console.log('Servidor ejecutándose en http://localhost:3000');
    
})