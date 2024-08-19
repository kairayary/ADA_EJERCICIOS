const net = require('net');

const server = net.createServer((socket) => {
    console.log('El cliente se ha Conectado');
   
   
    socket.on('data', (data) => {
        
        console.log('\nEl cliente ' + socket.remoteAddress + ':' + socket.remotePort + ' dice:' + data);
        
        socket.write('Hola Cliente!!!\n');
    });

    socket.on('end', ()=>{
        console.log('El cliente se ha desconectado!!!');
        
    });

    socket.on('error', (err) => {
        console.log(err.message);

    });
});

server.listen(5000, () => {
    console.log('Servidor TCP escuchando en el puerto 5000');

})