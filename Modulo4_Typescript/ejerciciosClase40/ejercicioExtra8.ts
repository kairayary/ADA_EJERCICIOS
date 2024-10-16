// 1. Declara un array que contenga los nombres de 5 países.
// 2. Ordena el array en orden alfabético.
// 3. Usa un método para agregar otro país al inicio del array.
// 4. Elimina el último país del array.
// 5. Recorre el array y muestra cada país por consola.

let paises: Array<string>= ['Venezuela','Dinamarca', 'España', 'Argentina', 'Irlanda' ];

console.log('Orden alfabeticamente ',paises.sort() );

paises.unshift('Mexico')

console.log('Agregar país ',paises );

paises.pop();

console.log('Eliminar país ', paises);

paises.forEach(pais=>{
    console.log(pais);
    
})


