/**Escribe un programa en JavaScript que clasifique diferentes animales
en tres categorías: "mamífero", "ave" o "reptil". Se te proporciona un
array llamado animales que contiene nombres de diferentes animales.
Utiliza un bucle for y operadores ternarios para crear un nuevo array
llamado clasificacion que contenga la clasificación de cada animal
según su tipo. */



let animales = ['perro', 'gato', 'loro', 'serpiente', 'elefante', 'aguila'];

let mamifero = [];
let ave = [];
let reptil = [];
let clasificacion = [animales.length];

for (let i = 0; i < animales.length; i++) {
    
    mamifero[i] = (animales[i] === 'perro' || animales[i] === 'gato' || animales[i] === 'elefante') ? 'mamífero' :
        ave[i] = (animales[i] === 'loro' || animales[i] === 'aguila') ? 'ave' : 
     reptil[i] = (animales[i] === 'serpiente' ) ? 'reptil' : 'desconocido';
    
}

for (let i = 0; i < animales.length; i++) {
    let clasificacion = mamifero|| ave || reptil;
    console.log(`El animal ${animales[i]} es un ${clasificacion[i]}`);
}