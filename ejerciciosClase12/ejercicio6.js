/**Solicita al usuario su edad y usa una función flecha para aplicar un descuento
dependiendo de la edad. Puedes tomar punto de partida los siguientes datos:
✓ 65 anos = 15% de descuento
✓ Menor a 65 = No hay descuento */

const prompt = require("prompt-sync")({ sigint: true });
let edad = parseInt(prompt('Indique su edad '));

let descuento = (params)=>{
 
    
    if (edad>= 65) {
        console.log('Usted tiene un 15% de descuento');
    }else if (edad<65){
        console.log('No hay descuento');
    }
}

descuento()

