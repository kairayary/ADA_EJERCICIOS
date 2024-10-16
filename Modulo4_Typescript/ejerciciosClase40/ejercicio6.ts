// 1. Declara un enum llamado Colores con los valores Rojo, Verde, Azul.
// 2. Crea un array de tuplas donde cada tupla tenga el nombre de un color
// (string) y el valor correspondiente del enum.
// 3. Añade una tupla más con otro color y su valor del enum.
// 4. Muestra por consola todo el array de tuplas.

enum colores{
    Rojo,
    Verde,
    Azul
};

//Crea un array de tuplas donde cada tupla tenga el nombre de un color
let coloresArray: [string, colores][] = [
    ['Rojo', colores.Rojo],
    ['Verde', colores.Verde],
    ['Azul', colores.Azul],
   
];

// Añade una tupla más con otro color y su valor del enum.
enum colores {
    Negro= 4 
}
coloresArray.push(['Amarillo',colores.Negro])
console.log(coloresArray);