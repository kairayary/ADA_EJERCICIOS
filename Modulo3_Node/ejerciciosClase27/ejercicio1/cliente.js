const net = require('net');
const readline = require('readline-sync');

const client = net.createConnection({port:7000}, ()=>{
    console.log('Conectado al Servidor');
    client.write('Hola Servidor');
});

client.on('data', (data)=>{
    console.log('Mensaje del servidor: ' + data.toString());
 

});

client.on('end', ()=>{
    console.log('Desconectado del servidor.');
})

client.on('error', (err)=>{
    console.log(err.message);
    
});
