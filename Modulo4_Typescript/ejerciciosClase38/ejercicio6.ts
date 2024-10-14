// Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta 
// variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los 
// valores.

let valor: unknown;

valor = 43;
if (typeof valor === 'number') {
    console.log(`Valor numérico: ${valor}`)
};


valor = 'Hola alegría';

if (typeof valor === 'string') {
    console.log(`Valor cadena: ${valor}`)
};

valor = false;

if (typeof valor === 'boolean') {
    console.log(`Valor booleano: ${valor}`)
}