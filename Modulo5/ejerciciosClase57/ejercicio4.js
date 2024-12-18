// 1. Implementa una nueva ruta para que los clientes puedan enviar datos de
// un nuevo usuario usando el método POST.
// 2. El cliente enviará un JSON en el cuerpo de la solicitud con los datos del
// usuario.
// 3. El servidor debe responder con un código 201 Created y un mensaje
// confirmando que el usuario fue creado.


const http = require('http');

//lista de usuarios
const users= [];
const server = http.createServer((req,res)=>{
    if (req.method==='POST' && req.url === '/users') {
        let body = '';
        req.on('data', chunk=>{
            body += chunk;
        });

        req.on('end',()=>{
            try {
                const newUser = JSON.parse(body);

                if (!newUser.name || !newUser.age) {
                    res.writeHead(400,{'content-type':'text/plain'});
                    res.end('Datos incompletos, es obliagtorio el nombre y la edad');
                    return;
                };

                //para agregar usuarios a la lista de users

                //para generar id 
                newUser.id= users.length + 1;
                users.push(newUser);

                res.writeHead(201,{'Content-Type': 'application/json'});
                res.end(JSON.stringify({mensaje:'Usuario creado exitosamente', user:newUser}));
            } catch (error) {
                res.writeHead(400,{'content-type':'text/plain'});
                res.end('La solicitud debe ser un JSON válido')
            };
        });
    }else{
        res.writeHead(404,{'content-type':'text/plain'});
        res.end('Ruta no encontrada')
    };
});

server.listen(3000, ()=>{
    console.log('Servidor escuchando en http://localhost:3000');
    
})