// 1. Modifica tu servidor para que acepte query strings en la ruta /buscar.
// 2. Si se proporciona un nombre en la query string (/buscar?nombre=Ana),
// responde con un mensaje de bienvenida.
// 3. Si no se proporciona el parámetro, devuelve un mensaje de error.
// Pistas:
// • Utiliza req.url y URLSearchParams para procesar las query strings.

const http = require('http');

//MiddLeware para registrar solicitudes
function logger(req) {
    const {method, url} = req;
    const fechaHora = new Date().toISOString();
    console.log(`[${fechaHora}] ${method} ${url}`);
};

const server = http.createServer((req, res)=>{
     
    //llamada al middleware de registro
    logger(req);
     const {method, url} = req;

    //ruta para manejar query string
    if (method === 'GET' && url.startsWith('/buscar')) {
        
        //para procesar query strings
        //Se extrae la parte de la URL después de ?
        const queryString = url.split('?')[1];
        
        // el URLSearchParams para manejar los parámetros de la query string
        const params = new URLSearchParams(queryString);
        
        //para obtener el valor del parámetro nombre
        const nombre = params.get('nombre');

        if (nombre) {
            //si el parámetro nombre esta presente
            res.writeHead(200, {'content-type':'application/json'});
            res.end(JSON.stringify({
                mensaje: `¡Bienvenida/o, ${nombre}!`
            }));
        }else{
            //si el parámetro nombre no esta presente
            res.writeHead(200, {'content-type':'application/json'});
            res.end(JSON.stringify({
                mensaje:'Error: El parámetro "nombre" es requerido en la query string'
            }));
        };

    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            mensaje: 'Ruta no encontrada'
        }));
    };
});

server.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
});