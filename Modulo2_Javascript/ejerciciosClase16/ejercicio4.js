/**Para este ejercicio, contamos con un array llamado listaDeSuperMercado que contiene una lista de ítems para comprar.
Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.
Ademas, debemos realizar las siguientes operaciones:
  */
const prompt = require("prompt-sync")({ sigint: true });

let listaDeSuperMercado = ['Bife de Chorizo', 
'CocaCola', 
'Bananas', 
'Lechugas',
'Chimichuerri',
'Lata de tomates',
'Arvejas',
'Cereales',
'Pechuga de pollo',
'Leche'];

//⦁	Agrega el artículo 'Papas' al final de la lista utilizando el método push.

listaDeSuperMercado.push('Papa');

//⦁	Elimina el primer artículo de la lista utilizando el método shift.

listaDeSuperMercado.shift();

//⦁	Utiliza el método forEach para recorrer el arreglo listaDeSuperMercado y mostrar cada ítem por consola.

listaDeSuperMercado.forEach(producto => {
    console.log(producto);
});

//⦁	Busca la posición del artículo 'Cereales' utilizando el método lastIndexOf y muestra su posición en la lista (considerando que los índices comienzan desde 1 en la lista mostrada al usuario), o indica que no se encontró si no está presente.

let articulo = prompt('Ingrese el articulo que desee buscar ');
let posicion = listaDeSuperMercado.lastIndexOf(articulo);

if (posicion !== -1) {
    console.log(`El articulo ${articulo} está en la lista en la posición ${posicion + 1}.`);
}else{
    console.log(`El articulo ${articulo} no esta en la lista.`);
}