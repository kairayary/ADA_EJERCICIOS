const net = require('net');
const readline = require('readline-sync');

const options = {
    port: 6000,
    host:'127.0.0.1'
};

const client = net.createConnection(options);

client.on('connect', ()=>{
    console.log('Conectado al servidor');
    sendMessage();
});

client.on('data', (data)=>{
    console.log('Mensaje del servidor: ' + data.toString());
    // sendLine();
    sendMessage();
});

client.on('error', (err)=>{
    console.log(err.message);
    
});

// function sendLine() {
//     const line = readline.question('Escribe un mensaje: ');
//     client.write(line);
// }

function sendMessage() {
   
    const message = readline.question('Escribe tu mensaje para enviar al servidor: ');

   
    if (message.trim() === '') {
        console.log('No se puede enviar un mensaje vacío.');
        return sendMessage();  
    }

    if (message.toLowerCase() === 'salir') {
        console.log('Desconectando...');
        client.end(); 
        return;
    }

    
    client.write(message);
}

