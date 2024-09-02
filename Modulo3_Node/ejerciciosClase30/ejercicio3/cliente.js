const net = require('net');
const readline = require('readline-sync');
const path = require('path');

const client = net.createConnection({port: 8082}, ()=>{
   console.log('Conectado al Servidor');
   sendMessage()
});

client.on('data', (data)=>{
    console.log('Respuesta del Srvidor: ', data.toString());
    sendMessage()
});

client.on('error', (err)=>{
    console.error('Error: ', err.message);
    
});

// Función para enviar mensajes al servidor

function sendMessage() {
    const mensaje = readline.question('Ingrese una ruta, ( "salir" para terminar): ');

    if (mensaje.trim() === '') {
        console.log('No se puede enviar un mensaje vacío.');
        return sendMessage();
    }

    if (mensaje.toLowerCase() === 'salir') {
        console.log('Desconectando...');
        client.end(); 
        return;
    }

    client.write(mensaje);
}