
const net = require('net');

const server = net.createServer((socket)=>{
    console.log('Cliente Conectado!!!');

     socket.setTimeout(10000);

     socket.on('data',(data)=>{
        console.log('\nEl cliente ' + socket.remoteAddress + ':' + socket.remotePort + ' dice:' + data);
        
        socket.write('Hola Cliente: Mensaje recibido!!!\n');
    });

     socket.on('timeout', ()=>{
        console.log('Tiempo de espera alcanzado');
        socket.end();
        
     });

     socket.on('end', () => {
        console.log('Cliente desconectado.');
       
    });
     socket.on('error',(err)=>{
        console.log(err.message);
        
     });
});

server.listen(7000,()=>{
    console.log('Servidor TCP escuchando en el puerto 7000');
    
})