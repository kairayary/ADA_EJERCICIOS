/**Objetivo: Crear un servidor TCP que normalice las rutas recibidas
utilizando path.normalize y envíe la ruta normalizada al cliente.
Pasos:
1. Configuración del Servidor:
o Crea un servidor TCP que escuche en un puerto específico
(por ejemplo, 8081).
2. Comando para Normalizar Rutas:
o El servidor debe recibir una ruta desde el cliente.
o Usa path.normalize para normalizar la ruta.
3. Responder al Cliente:
o Envía la ruta normalizada al cliente.
Instrucciones:
• Ejecuta el servidor y conecta un cliente.
• Envía rutas con barras redundantes y puntos (e.g., ./docs/../file.txt)
para verificar la funcionalidad. */

const net = require('net');
const path = require('path');

const server = net.createServer((socket)=>{
   
    socket.on('data', (data)=>{
        console.log('Cliente Conectado!!');

        const rutaRecibida = data.toString();
        console.log(`Ruta recibida: ${rutaRecibida}`);
        
        //Normalizar la ruta 

        const rutaNormalizada = path.normalize(rutaRecibida);

        socket.write(`Ruta normalizada es: ${rutaNormalizada}`)
    });

    socket.on('end', ()=>{
        console.log('El cliente se ha desconectado');
        
    });

    socket.on('error', (err) => {
        console.error(`Error: ${err}`);
    });
});

server.listen(8081, ()=>{
    console.log('Servidor TCP escuchando en el puerto 8081');
});