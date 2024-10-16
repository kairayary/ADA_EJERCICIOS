// 1. Crea un array de tuplas donde cada tupla almacene el nombre de un
// producto (string), la cantidad disponible (número) y el precio por unidad
// (número).
// 2. Añade tres productos al array con la siguiente información: "Manzana", 10,
// 1.5; "Pan", 20, 2.0; "Leche", 5, 1.2.
// 3. Imprime la información del segundo producto.



let productoNombres:[string, number, number][]= [
    ['Jugo', 5, 2.3],
    ['Tomate', 10, 1.3],
    ['Helado', 3, 3.3],
];

productoNombres.push(["Manzana", 10, 1.5], ["Pan", 20, 2.0], ["Leche", 5, 1.2]);

console.log('Nuevo array ', productoNombres);
console.log('El segundo producto es ', productoNombres[1]);
