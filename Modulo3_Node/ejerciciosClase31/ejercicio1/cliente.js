/**Crear un servidor TCP que asigne un UUID v4 único a cada conexión y
envíe el UUID de vuelta al cliente.
Pasos:
1. Servidor TCP (server.js):
o Importar los módulos net y uuid.
o Crear un servidor TCP que genere un UUID v4 para cada
conexión y envíe el UUID al cliente.
2. Cliente TCP (client.js):
o Importar el módulo net.
o Conectar al servidor TCP, recibir el UUID y mostrarlo en la
consola.
 */

const net = require('net');

//Conectar al servidor TCP

const client = net.createConnection({port: 8080}, ()=>{
    console.log('Cliente Conectado al Servidor');
    
});

//Recibir el UUID del servidor

client.on('data', (data)=>{

    console.log(`Recibido del servidor: ${data.toString()}`);

});

//Manejar el cierre de la conexión

client.on('end',()=>{
    console.log('Desconectado del servidor');
    
});

// Manejar errores en la conexión
client.on('error', (err) => {
    console.error('Error en la conexión:', err);
  });