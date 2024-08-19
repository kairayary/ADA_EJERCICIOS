/**Declarar 4 variables utilizando la palabra reservada let y asignarles
valores según el tipo de dato que sugiera su nombre. Además, realizar
operaciones y validaciones adicionales sobre estos valores. 
1. Declara una variable llamada verdadero y asígnale un dato
de tipo booleano (true o false).
2. Declara una variable llamada texto y asígnale un string de tu
elección (puedes usar cualquier mensaje que prefieras).
3. Declara una variable llamada numero y asígnale un dato
numérico (puedes usar cualquier número entero o decimal).
4. Declara una variable llamada nada y asígnale un valor que
represente la ausencia de valor en JavaScrip

*/


const prompt = require("prompt-sync")({ sigint: true });

let verdadero = false;
let texto = 'Hola';
let numero = 5;
let nada = null;

let resta = numero - 20;
console.log(resta);

let concatenar = texto + ' ' + ' estamos en clases';
console.log(concatenar);


if (verdadero === true) {
    console.log('La variable es verdadero');
}else{
    console.log('La variable es falsa');
}

if (nada === null) {
    console.log('La variable es null');
}else{
    console.log('La variable no es null');
}