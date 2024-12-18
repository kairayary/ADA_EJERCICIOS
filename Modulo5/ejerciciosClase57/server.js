// Ejercicio 1: Crear un Servidor que Responda con "Hola Mundo"
// Descripción:
// 1. Crea un archivo en tu proyecto llamado server.js.
// 2. Utilizando el módulo http de Node.js, configura un servidor que escuche
// en el puerto 3000.
// 3. El servidor debe responder con el mensaje "Hola, Mundo!" cada vez que
// reciba una solicitud.
// 4. Asegúrate de que el mensaje aparezca en tu navegador cuando visites
// http://localhost:3000.
// Pistas:
// • Utiliza http.createServer() y res.end() para enviar la respuesta.


import * as http from 'http';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hola, mundo');
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000',);
});
