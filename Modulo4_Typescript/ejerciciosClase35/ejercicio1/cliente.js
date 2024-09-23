const net = require('net');
const readline = require('readline');
const { mostrarMensaje } = require('./view/echoView');

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Conectado al servidor de eco.');
});

client.on('data', (data) => {
    mostrarMensaje(data.toString());
});

client.on('end', () => {
  console.log('Desconectado del servidor.');
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  client.write(input);
});
