
const net = require('net');
const readline = require('readline');

// Configuración de readline para leer entradas del usuario en la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Conexión al servidor
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Conectado al servidor');
    
    // Solicitar primer número
    rl.question('Introduce el primer número: ', (num1) => {
        
        // Solicitar segundo número
        rl.question('Introduce el segundo número: ', (num2) => {
            
            // Enviar los dos números al servidor
            client.write(`${num1} ${num2}`);
        });
    });
});

// Recepción de la respuesta del servidor
client.on('data', (data) => {
    console.log(`Respuesta del servidor: ${data.toString()}`);
    client.end(); // Cerrar la conexión después de recibir la respuesta
});

// Mensaje de desconexión
client.on('end', () => {
    console.log('Desconectado del servidor');
    rl.close(); // Cerrar la interfaz readline
});
