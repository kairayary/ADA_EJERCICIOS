/**Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
le pida al usuario que lo trate de adivinar. Si el número es correcto debe
imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe
imprimir "Lo siento, ¡intenta nuevamente!"
 */

const prompt = require("prompt-sync")({ sigint: true });

const num = 7;

let numUsuario = parseInt(prompt('Ingrese un número del 1 al 10 '));

if (numUsuario=== num) {
    console.log('Felicitaciones, has adivinado')
}else{
    console.log('Lo siento, ¡intenta nuevamente');
}