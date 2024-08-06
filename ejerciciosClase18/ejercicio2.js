/**Pide al usuario que ingrese una oración. Luego, escribe la función
“procesarOracion” que haga lo siguiente:
1. Quite los espacios en blanco al principio y al final.
2. Divida la oración en palabras.
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar
“/a/g” que indica que se debe buscar todas las apariciones del
carácter 'a' en la cadena (la bandera g es para global, lo que
significa que reemplazará todas las apariciones, no solo la primera).
4. Encuentre la posición de la primera aparición de la palabra
"javascript". De no aparecer retornar -1
5. Convierta la oración a una cadena de palabras separadas por
guiones.
 */

const prompt = require("prompt-sync")({ sigint: true });

let oracion = prompt(' Ingrese una oración ');

let procesarOracion = (oracion) => {

    //Quite los espacios en blanco al principio y al final
    oracion = oracion.trim();

    //Divida la oración en palabras
    let divideFrase = oracion.split(' ');
    
    /**Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar
    “/a/g” que indica que se debe buscar todas las apariciones del
    carácter 'a' en la cadena (la bandera g es para global, lo que
    significa que reemplazará todas las apariciones, no solo la primera) */
    let sustituir = oracion.replace(/a/g, '@')

    /**Encuentre la posición de la primera aparición de la palabra
    "javascript". De no aparecer retornar -1  */
    let primeraPosicion = oracion.indexOf('javascript')

    /**Convierta la oración a una cadena de palabras separadas por
    guiones. */

    let dividePorGuiones = divideFrase.join('-')

    return {
        divideFrase: divideFrase,
        sustituir: sustituir,
        primeraPosicion: primeraPosicion,
        dividePorGuiones: dividePorGuiones
       
    }
}

console.log(procesarOracion(oracion));




 

    