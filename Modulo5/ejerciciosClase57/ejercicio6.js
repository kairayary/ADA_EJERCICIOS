// Descripción:
// 1. Crea una ruta para eliminar un usuario basado en su ID.
// 2. Si el usuario existe, elimina el recurso y responde con un mensaje
// confirmando la eliminación.
// 3. Si no, responde con un código 404 y el mensaje "Usuario no encontrado".
// Pistas:
// • Captura el ID del usuario desde la URL con req.url.
// • Utiliza res.statusCode para enviar los códigos de respuesta adecuados.

const http = require('http');


const usuarios = [
    { id: 1, nombre: 'Ivanna', edad: 12 },
    { id: 2, nombre: 'Andres', edad: 18 },
    { id: 3, nombre: 'Eliam', edad: 5 },
];

const server = http.createServer((req,res)=>{
    const {method, url} = req;

    if(method === 'DELETE' && url.startsWith('/usuarios/') ){
       
        //para extraer el ide del usuario
        const id = parseInt(url.split('/')[2], 10);

        //para validar si el id es válido
        if (isNaN(id)) {

            res.writeHead(400, {'content-type': 'application/json'});
            res.end(JSON.stringify({mensaje: 'El ID es inválido'}));
            return; 
        };

        //para buscar el indice del usuario en el array
        const indiceUsuario = usuarios.findIndex(u => u.id === id);

        //para eliminar el usuario del array
        if (indiceUsuario !== -1) {
            
            const usuarioEliminado = usuarios.splice(indiceUsuario, 1);
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify({
                mensaje: 'El usuario ha sido eliminado exitosamente',
                usuario: usuarioEliminado[0]
            }));
        }else{
            res.writeHead(404,{'content-type':'application/json'});
            res.end(JSON.stringify({
                mensaje:'Usuario no encontrado'
            }))
        }
    }else{
        res.writeHead(404, {'content-type':'text/plain'});
        res.end('Ruta no encontrada');
    };
});

server.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
});