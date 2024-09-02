const path= require('path');

//Ejemplo 1: obtener el nombre del archivo desde una ruta absoluta.

const fullPath = '/home/user/docs/file.txt';

const basename1 = path.basename(fullPath);

console.log("Ejemplo 1 -Nombre del archivo: ", basename1);

//Ejemplo 2: obtener el nombre del archivo sin extensión.

const basename2 = path.basename(fullPath, 'txt');

console.log("Ejemplo 2 -Nombre del archivo sin extensión: ", basename2);

//Ejemplo 3: Usocon rutas relativas.
const relativePath = 'src/utils/helpers.js'
const basename3 = path.basename(relativePath);

console.log("Ejemplo 3 -Nombre del archivo desde una ruta relativa: ", basename3);

//Ejemplo 4: Obtener el nombre de un directorio.
const dirPath = 'var/www/html/';
const basename4 = path.basename(dirPath);

console.log("Ejemplo 4 -Nombre del directorio: ", basename4);

//Ejemplo 5: Rutas con separador de windows.
const windowsPath = 'C:\\Users\\SantiagoFelipelli\\Documents\\claseBack.pdf';
const basename5 = path.basename(windowsPath);

console.log("Ejemplo 5 -Nombre de archivo en ruta de windows: ", basename5);
