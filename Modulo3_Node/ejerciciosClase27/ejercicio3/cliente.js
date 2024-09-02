const net = require('net');
const readline = require('readline-sync');




const client = net.createConnection({ port: 10000 }, () => {
    console.log('Conectado al servidor');
    // Enviar un mensaje inicial
    sendMessage();
});


// Manejar los datos recibidos del servidor
client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    sendMessage();
});


client.on('error', (err) => {
    console.error('Error:', err.message);
});

// Función para enviar mensajes al servidor
function sendMessage() {
    const mensaje = readline.question('Escribe tu mensaje para enviar al servidor ( "salir" para terminar): ');

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