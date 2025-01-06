// Crea un endpoint GET /external/users que realice una solicitud HTTP a
// una API pública para obtener una lista de usuarios. Luego, devuelve los
// datos obtenidos al cliente.
// • Usa la API pública: https://jsonplaceholder.typicode.com/users.
// • Asegúrate de que el cliente reciba los datos correctamente desde la
// API externa.


const express = require('express');
const https = require('https');
const app = express();

//endpoint
app.get('/external/users', (req, res) => {
    const URL = 'https://jsonplaceholder.typicode.com/users';

    //para realizar la solicitud
    https.get(URL, (response) => {
        let data = '';

        //para recibir los datos en fragmento
        response.on('data', (chunk) => {
            data += chunk;
        });

        //uan vez que se complete la recepcion de los datos
        response.on('end', () => {
            try {

                //para pasar de cadena json a cadena javascript
                const users = JSON.parse(data)

                //envio de datos al cliente
                res.json(users);

            } catch (error) {
                console.error('Error al procesar los datos:', error.message);
                res.status(500).json({
                    error: 'Error al procesar los datos de la API externa',
                });
            }

        });

    }).on('error', (error) => {
        console.error('Error en la solicitud HTTPS:', error.message);
        res.status(500).json({
            error: 'Hubo un problema al obtener los datos de la API externa',
        });
    });
});
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
})