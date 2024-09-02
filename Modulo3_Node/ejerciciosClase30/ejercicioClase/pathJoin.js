const path = require('path');

//Ejemplo 1: Uniendo segmentos de rutas simples

const example1= path.join('/user', 'local','bin');

console.log('Ejemplo 1 -Rutas comnbinadas: ', example1);

//Ejemplo 2: eliminación de bararrs redundantes

const example2= path.join('/user/', '/local', 'bin/')
console.log('Ejemplo 2 -Rutas normalizadas sin barras redundantes: ', example2);

//Ejemplo 3: normalización rutas con '..' (subir directorio)

const example3= path.join('/user/', 'local','..', 'bin/')
console.log("Ejemplo 3 -Rutas normalizada con '..': ", example2);