/**Solicita al usuario una edad y usa una función flecha para clasificarla en niño,
adolescente, adulto o adulto mayor */

const prompt = require("prompt-sync")({ sigint: true });

let clasificar = (edad) => {

    if (edad > 0 && edad < 12) {
        console.log('Es un niño');

    } else if (edad >= 12 && edad < 18) {
        console.log('Es un adolescente')

    } else if (edad >= 18 && edad < 60) {
        console.log('Es un adulto');

    } else {
        console.log('Es un adulto mayor')
    } 
    

}


let edad = parseInt(prompt('Por favor, ingrese su edad '))

console.log(clasificar(edad));
