/**Escribe una función "gestionarAutos" que realice las siguientes tareas con
una lista predefinida de marcas de autos:

let entrada ='Toyota, Honda, Ford, Chevrolet, Nissan';

1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por
puntos. Utilizar “.sort()”
 */

let entrada = 'Toyota, Honda, Ford, Chevrolet, Nissan';

function gestionarAutos(entrada) {
    //Quite los espacios en blanco alrededor de cada marca.

    let marcas = entrada.split(',');

    for (let i = 0; i < marcas.length; i++) {
        marcas[i] = marcas[i].trim();
    }

    let resultado = marcas.join(', ');

   // Verifique si existe la marca "Tesla"
     
   if (!marcas.includes('Tesla')) {
    console.log('La marca buscada No se encuentra en la lista');
   }else{
    console.log('La marca buscada se encuentra registrada');
   }

   //Reemplace todas las marcas "Ford" por "BMW"
   
   let reemplazarMarca = entrada.split(',').map(marca => marca.trim().replace(/Ford/gi, 'BMW'));
    
   //Encuentre el índice de la marca "Chevrolet"

   let indiceMarca =reemplazarMarca.findIndex(marca=> marca == 'Chevrolet');

   //Devuelva una cadena de marcas en orden alfabético separadas por
   //puntos

    let ordenar = reemplazarMarca.sort().join('.')
   return{
        resultado,
        reemplazarMarca,
        indiceMarca,
        ordenar
       
       
    } 
}

console.log(gestionarAutos(entrada));