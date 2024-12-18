// 1. Modifica tu servidor para que devuelva códigos de estado adecuados
// según el resultado de la operación (200, 201, 404, 400).
// 2. Añade un middleware simple que registre todas las solicitudes en la
// consola. (Investiga de que se trata)
// Pistas:
// • Usa console.log() para registrar la información de las solicitudes.
// • Implementa res.writeHead() para los diferentes códigos de estado.

const http = require('http');

const usuarios = [
    {id:1, nombre:'Ivanna', edad:12},
    {id:2, nombre:'Andres', edad:18},
    {id:3, nombre:'Eliam', edad:5}
];

//middleware para registrar solicitudes

function logger(req) {
    const {method, url}= req;
    const fechaHora = new Date().toISOString();
    console.log(`[${fechaHora}] ${method} ${url}`);
};

const server = http.createServer((req,res)=>{
    //llamada del middleware de registro
    logger(req);

    const{method, url}=req;

    //Solicitud OUT para actualizar usuarios
    if (method === 'PUT' && url.startsWith('/usuarios')) {
        const id = parseInt(url.split('/')[2],10);
        let body = '';

        req.on('data', chunk =>{
            body += chunk;
        });

        req.on('end', ()=>{
            try {
                const datosActualizados = JSON.parse(body);

                //buscar el usuario por el id
                const usuario = usuarios.find(u => u.id === id);

                if (usuario) {
                    //actualizar propiedades manualmente
                    if(datosActualizados.nombre){
                       
                        usuario.nombre = datosActualizados.nombre;
                    };
                    if (datosActualizados.edad) {
                        
                        usuario.edad = datosActualizados.edad;
                    };

                    res.writeHead(200, {'content-type':'application/json'});
                    res.end(JSON.stringify({
                        mensaje:'Usuario actualizado exitosamente'
                    }));
                    
                }else{
                    res.writeHead(404, {'content-type':'application/json'});
                    res.end(JSON.stringify({
                        mensaje:'Usuario no encontrado'
                    }))
                }
            } catch (error) {
                res.writeHead(400,{'content-type':'application/json'});
                res.end(JSON.stringify({
                    mensaje:'Error al procesar los datos enviados'
                }));
            };
        });
    } else {
        res.writeHead(404, {'content-type':'application/json'});
        res.end(JSON.stringify({
            mensaje:'Ruta no encontrada'
        }));
    };
});

server.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
});