const path = require('path');

//Ejemplo 1: obtener el directorio contenedor de un archivo desde una ruta absoluta

const filePath ='/home/user/docs/file.txt';

const dirName1 = path.dirname(filePath);
console.log("Ejemplo 1 - Directorio contenedor de file.txt: ", dirName1);

//Ejemplo 2: obtener el directorio contenedor de un archivo usando una ruta relativa

const relativaPath ='src/utils/helpers.js';

const dirName2 = path.dirname(relativaPath);
console.log("Ejemplo 2 - Directorio contenedor de helpewrs.js: ", dirName2);

//Ejemplo 3: uso de una ruta de windows

const windowsPath ='C:\\Users\\Admin\\Documents\\back.pdf';

const dirName3 = path.dirname(windowsPath);
console.log("Ejemplo 3 - Directorio contenedor de ruta de windows: ", dirName3);
