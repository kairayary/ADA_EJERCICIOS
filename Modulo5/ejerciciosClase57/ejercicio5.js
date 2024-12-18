// Descripción:
// 1. Implementa una ruta para actualizar los datos de un usuario existente.
// 2. El cliente enviará un JSON con los datos actualizados.
// 3. Si el usuario existe, actualiza su información y devuelve el usuario
// actualizado.
// 4. Si no, devuelve un código 404 y un mensaje de error.
// Ejemplo de Solicitud:
// • URL: /usuarios/2
// • Datos:
// Pistas:
// • Utiliza req.method y req.url para identificar la solicitud.
// • Usa JSON.parse() para procesar los datos recibidos.


const http = require('http');

const usuarios = [
    { id: 1, nombre: 'Ivanna', edad: 12 },
    { id: 2, nombre: 'Andres', edad: 18 },
    { id: 3, nombre: 'Eliam', edad: 5 },
];

const server = http.createServer((req, res) => {

    const { method, url } = req;
    //PUT maneja actualizaciones y url.startsWith para filtrar rutas que icluyan /usuarios{id}
    if (method === 'PUT' && url.startsWith('/usuarios/')) {
        //para extraer el id del usuario
        const id = parseInt(url.split('/')[2], 10)
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const actualizarDatos = JSON.parse(body);

                //buscar el usuario por id
                const usuario = usuarios.find(u => u.id === id);

                if (usuario) {

                    //Para actualizar los campos que se proporcionen
                    if (actualizarDatos.nombre) {
                        usuario.nombre = actualizarDatos.nombre;
                    };

                    if (actualizarDatos.edad) {
                        usuario.edad = actualizarDatos.edad;
                    };

                    res.writeHead(200, { 'content-type': 'application/json' });
                    res.end(JSON.stringify({
                        mensaje: 'El usuario ha sido actualizado exitosamente',
                        usuario
                    }));
                } else {
                    res.writeHead(404, { 'content-type': 'application/json' });
                    res.end(JSON.stringify({
                        mensaje: 'Usuario no encontrado'
                    }));
                }
            } catch (error) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    mensaje: 'Error al intentar actualizar'
                }));
            };
        });
    } else {
        // Ruta no encontrada
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            mensaje: 'Ruta no encontrada'
        }));
    }
});

server.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
})