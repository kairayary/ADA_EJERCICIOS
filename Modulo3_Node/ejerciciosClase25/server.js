

const net = require('net');

const server = net.createServer();

server.on('connection', (socket)=>{

    console.log('Cliente conectado');
    
    socket.on('data', (data)=>{
   console.log('\nEl cliente ' + socket.remoteAddress + ':' + socket.remotePort + ' dice:' + data);

   socket.write('Mensaje Recibido!!!\n');
   
    });

    socket.on('close', ()=>{
        console.log('Cliente desconectado.');
    });

    socket.on('error', (err)=>{
        console.log(err.message);
        
    });
});

//Inicio del servidor el en Puerto 5000

server.listen(5000, ()=>{
    console.log('Servidor TCP escuchando en el puerto 5000');
    
})