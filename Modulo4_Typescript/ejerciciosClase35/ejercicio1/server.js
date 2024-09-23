const net = require('net');
const { manejarMensaje } = require('./controller/echoController');

const server = net.createServer((socket) => {
  console.log('Cliente conectado.');

  socket.on('data', (data) => {
    const response =  manejarMensaje(data.toString().trim());
    socket.write(response);
  });

  socket.on('end', () => {
    console.log('Cliente desconectado.');
  });

  socket.on('error', (err) => {
    console.error('Error:', err);
  });
});

server.listen(3000, () => {
  console.log('Servidor de eco escuchando en el puerto 3000');
});
