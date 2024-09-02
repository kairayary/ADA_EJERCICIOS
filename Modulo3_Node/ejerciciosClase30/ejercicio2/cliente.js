const net = require('net');
const readline = require('readline-sync');
const path = require('path');


const client = net.createConnection({port: 8081}, ()=>{
    console.log('Conectado al servidor');
   
    sendMessage()
   
});

client.on('data', (data)=>{
    console.log('Respuesta del servidor: ', data.toString());
    sendMessage()
});

client.on('end',()=>{
    console.log('Desconectado del servidor');
})
client.on('error', (err)=>{
    console.error('Error: ', err.message);
    
});

// Función para enviar mensajes al servidor
function sendMessage() {
    let mensaje = readline.question('Ingrese una ruta, ( "salir" para terminar): ');

    while (mensaje.trim() === '') {
        console.log('No se puede enviar un mensaje vacío.');
        mensaje = readline.question('Ingrese una ruta, ( "salir" para terminar): ');
    }

    if (mensaje.toLowerCase() === 'salir') {
        console.log('Desconectando...');
        client.end();
    } else {
        client.write(mensaje);
    }
}