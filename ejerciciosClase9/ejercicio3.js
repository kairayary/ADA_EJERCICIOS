/**Utilizando la estructura switch, crea un programa que le pida al usuario
valorar la película que acaba de ver según la siguiente escala:
✓ Muy mala.
✓ Mala.
✓ Mediocre.
✓ Buena.
✓ Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás
o te alegrás por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos
mucho."
En caso de que el usuario ingrese un valor distinto, mostrarle el
mensaje: "Ingresaste un valor inválido".
Finalmente, agradecer al usuario por su visita. */

const prompt = require("prompt-sync")({ sigint: true });

let valoracion = parseInt(prompt("Por favor, califique la pelicula:\n" +
    "1. Muy Mala\n" +
    "2. Mala\n" +
    "3. Mediocre\n" +
    "4. Buena\n" +
    "5. Muy Buena\n"))


switch (valoracion) {
    case 1:
        console.log('Calificaste la película como Muy Mala. Lo lamentamos mucho');
        break;

    case 2:
        console.log('Calificaste la película como  Mala. Lo lamentamos mucho');
        break;

    case 3:
        console.log('Calificaste la película como Mediocre. Lo lamentamos mucho');
        break;

    case 4:
        console.log('Calificaste la película como Buena. Nos alegra mucho');
        break;

    case 5:
        console.log('Calificaste la película como Muy Buena. Nos alegra que te haya gustado');
        break;

    default:
        console.log('Ingresaste un valor inválido');

        break;
}