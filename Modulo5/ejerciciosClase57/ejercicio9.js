
// 1. Implementa un sistema de autenticación sencillo que verifique el
// encabezado Authorization.
// 2. Si el encabezado tiene el valor "Bearer 123", responde con "Acceso
// concedido".
// 3. Si no, devuelve un código 403 Forbidden.

const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res)=>{
    const authHearder = req.headers['authorization'];

    if (authHearder=== 'Mariposa123') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Acceso autorizado');
        
    }else{
        res.writeHead(403,{'content-type': 'text/plain'});
        res.end('Acceso Denegado');
    };
});

server.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});