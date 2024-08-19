/**Escribe un programa que lea una nota (entero entre 0 y 100) e imprima
el equivalente en letras siguiendo esta escala:
✓ A si la nota está entre 90 y 100
✓ B si la nota está entre 80 y 89
✓ C si la nota está entre 70 y 79
✓ D si la nota está entre 60 y 69
✓ F si la nota está entre 0 y 59
Utiliza operadores ternarios para determinar la calificación en letras */

const prompt = require("prompt-sync")({ sigint: true });


let nota = parseInt(prompt('Ingrese la nota en base a 100 '));

if (nota >= 0 && nota <= 100) {
   

    let A = (nota >= 90 && nota <= 100) ? 'A' : '';
    let B = (nota >= 80 && nota <= 89) ? 'B' : '';
    let C = (nota >= 70 && nota <= 79) ? 'C' : '';
    let D = (nota >= 60 && nota <= 69) ? 'D' : '';
    let F = (nota >= 0 && nota <= 59) ? 'F' : '';
    
    let calificacion = A || B || C || D || F;

    console.log(`La calificación correspondiente a la nota ${nota} es: ${calificacion}`);
} else {
  console.log('Nota ingresada no es válida');
}



