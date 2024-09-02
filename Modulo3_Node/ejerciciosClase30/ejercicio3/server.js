/**Objetivo: Crear un servidor TCP que acepte una ruta y responda con la
base, el directorio, y la extensión del archivo usando path.basename,
path.dirname, y path.extname.
Pasos:
1. Configuración del Servidor:
o Crea un servidor TCP que escuche en un puerto específico
(por ejemplo, 8082).
2. Comando para Obtener Información de la Ruta:
o El servidor debe recibir una ruta desde el cliente.
o Usa path.basename, path.dirname, y path.extname para
obtener la base del nombre, el directorio y la extensión del
archivo, respectivamente.
3. Responder al Cliente:
o Envía la información al cliente en un formato legible.
Instrucciones:
• Ejecuta el servidor y conecta un cliente.
• Envía rutas completas (e.g., /home/user/docs/file.txt) para
verificar la funcionalidad. */

const net = require('net');
const path = require('path');

const server = net.createServer((socket)=>{

    socket.on('data', (data)=>{
        console.log('El Cliente se ha conectado');

        const rutaRecibida = data.toString().trim();
        const rutaBase = path.basename(rutaRecibida);
        const rutaDirectorio = path.dirname(rutaRecibida);
        const rutaExtension = path.extname(rutaRecibida);

        socket.write(`Ruta recibida: ${rutaRecibida}\n
            Base: ${rutaBase}\n
            Directorio: ${rutaDirectorio}\n
            Extensión: ${rutaExtension}\n`);
        
    });


    socket.on('end', ()=>{
        console.log('El cliente se ha desconectado');
        
    });
    
    socket.on('error', (err) => {
        console.error(`Error: ${err}`);
    });
});

server.listen(8082, ()=>{
    console.log('Servidor TCP escuchando en el puerto 8082');
});