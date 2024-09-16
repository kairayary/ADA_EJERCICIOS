const net= require ('net');
const {v5: uuidv5} = require ('uuid');

//nombre y espacio de nombres fijos para generar UUID v5

const NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const NAME = 'usuario';

//Crear el servidor
const server = net.createServer((socket)=>{
    //Generar un UUID v5 
    const clienteUUID = uuidv5(NAME, NAMESPACE);

    //Crear el objeto json a enviar
    const response ={
        uuid: clienteUUID,
        message: 'Este es tu UUID v5 basado en un nombre fijo y namespace.'
    }

    //Enviar el objeto JSON al cliente 
    socket.write(JSON.stringify(response));

    //Manejar la desconexión del cliente
    socket.on('end',()=>{
        console.log('Cliente desconectado');
        
    });

    //Manejar errores en la conexión
    socket.on('error', (err)=>{
        console.error('Error con la conexión:', err);
    });
});

// Configurar el servidor para que escuche en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
  });