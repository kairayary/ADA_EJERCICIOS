/**Pide al usuario que ingrese una lista de nombres separados por comas.
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”,
“Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las
siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados
por puntos. Investigar el método “.sort()”
 */

const prompt = require("prompt-sync")({ sigint: true });

let entradaUsuario = prompt('Ingresa una lista de nombres separados por comas; por ejemplo: Julian, Maria, Malena, Andrea, Pablo, Pedro: ');


const transformarYAnalizarNombres = (entrada) => {
    let nombres = [];
    //Quite los espacios en blanco alrededor de cada nombre
    let listaNombres = entrada.split(',').map(nombre => nombre.trim());
    
    listaNombres.forEach(nombre => {
        nombres.push(nombre);
      });

      console.log(nombres);
    //Verifique si existe el nombre "Juan"
    let existeNombre= nombres.includes('Juan');

    console.log('Existe el nombre Juan? ' + existeNombre);

    //Reemplace todos los nombres "María" por "Ana"

    let reemplazar = nombres.replace

 return 
   
}

let resultado = transformarYAnalizarNombres(entradaUsuario);

console.log(resultado);
