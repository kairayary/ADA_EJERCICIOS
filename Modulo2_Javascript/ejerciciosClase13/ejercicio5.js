/**Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra
que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo
contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras.
Considerar que el usuario ingresa números de hasta dos cifras */

const prompt = require("prompt-sync")({ sigint: true });

let numUsuario = parseInt(prompt('Ingrese un número '))
 
if (numUsuario<=9 ) {
    let faltaDosCifras = 10 - numUsuario;
    console.log(`El número ingresado ${numUsuario} le falta ${faltaDosCifras} para llegar a ser un número de 2 cifras `);
} else if (numUsuario<= 99) {
    let faltaTresCifras = 100 - numUsuario;
    console.log(`El número ingresado ${numUsuario} le falta ${faltaTresCifras} para llegar a ser un número de 3 cifras `);
}else{
    console.log('Por favor ingrese un número válido de hasta 2 cifras');
}