// 1. Declara un enum llamado Clima con los valores: Soleado, Nublado,
// Lluvioso, Tormentoso.
// 2. Crea un array que almacene una serie de estados del clima usando los
// valores del enum.
// 3. Usa un ciclo para recorrer el array e imprime los valores del clima en cada
// posición.

enum Clima {
    Soleado,
    Nublado,
    Lluvioso,
    Tormentoso
};

let estadoClima: [string, Clima][]=[
    ['Soleado', Clima.Soleado],
    ['Nublado', Clima.Nublado],
    ['Lluvioso', Clima.Lluvioso],
    ['Tormentoso', Clima.Tormentoso]
];

estadoClima.forEach(clima =>{
    console.log(`El estado del clima es: ${clima[0]}, con valor en el enum: ${clima[1]}`);
});