/**Tenemos un array en una variable frases con frases al azar.
Usar la función map para crear un nuevo array donde cada frase empiece
y termine con signo de exclamación. Mostrar por consola el array original
y el nuevo */

const frases = ['Labore sea dolor', 'Justo rebum dolor', 'Stet loremamet'];

let nuevoArray = frases.map(function(frase) {
    return '¡'+ frase + '!'
});

console.log(`Array original ${frases} `);

console.log(`Array nuevo ${nuevoArray} `);