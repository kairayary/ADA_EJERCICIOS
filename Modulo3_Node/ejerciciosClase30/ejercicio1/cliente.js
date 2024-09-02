const net = require('net');
const readline = require('readline-sync');
const path = require ('path');



const client = net.createConnection({ port: 8080 }, () => {
    console.log('Conectado al servidor');
    const line = readline.question('Escribe una ruta para verificar el tipo ');
    client.write(line);
});


// Manejar los datos recibidos del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
   
});


client.on('error', (err) => {
    console.error('Error:', err.message);
});


