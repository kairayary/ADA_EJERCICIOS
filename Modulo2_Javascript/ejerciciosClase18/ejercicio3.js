/**A partir del siguiente array de productos, escriba la función
‘gestionarProductos’ que realice las siguientes tareas:

let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];

1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto
pueden usar forEach o investigar el método “findIndex()”
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
4. Verifique si existe un producto con precio mayor a 50. Para esto
investigar el método “.some()”
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Glo
bal_Objects/Array/some
5. Devuelva una cadena de nombres de productos separados por
comas */

const prompt = require("prompt-sync")({ sigint: true });

let productos = [
    { nombre: "Alfajores", precio: 30 },
    { nombre: "Chocolates", precio: 50 },
    { nombre: "Chupetines", precio: 70 },
    { nombre: "Caramelos", precio: 20 },
    { nombre: "Bombones", precio: 20 },
];

//Añada un nuevo producto al array.

let nuevoProducto = { nombre: "Helados", precio: 99 };

productos.push(nuevoProducto);

console.log('Este es array con el nuevo producto');
console.log(productos);

//Elimine el último producto del array

productos.pop();

console.log('Este es el array con el producto eliminado');
console.log(productos);

/**Encuentre el índice de un producto específico. En este punto
pueden usar forEach o investigar el método “findIndex()” */

let seleccion = prompt('Indica el producto que desea saber su posición ');

const index = productos.findIndex((producto) => producto.nombre == seleccion );

console.log('La posición del producto que esta buscando es ' + index);

//Verifique si existe un producto con precio mayor a 50. Para esto
//investigar el método “.some()”

const mayorCincuenta = (producto) => producto.precio > 50;

let resultado = productos.some(mayorCincuenta)

console.log(resultado);

/**Devuelva una cadena de nombres de productos separados por
comas */


//uso un map para obtener un array de productos
let nombresDeProductos = productos.map(producto => producto.nombre);

// Unir los nombres con comas usando join
let cadenaDeNombres = nombresDeProductos.join(", ");

console.log(cadenaDeNombres);
