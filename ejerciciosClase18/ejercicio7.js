/**Escribe una función "gestionarFloreria" que realice las siguientes tareas
con una lista predefinida de nombres de flores:

let entrada = 'Rosa, Tulipán, Orquídea, Lirio';

1. Quite los espacios en blanco alrededor de cada flor.
2. Verifique si existe la flor "Margarita" y, si está presente, agregue
"Azucena" al final de la lista.
3. Reemplace todas las flores "Orquídea" por "Clavel".
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
"Girasol" al inicio de la lista.
5. Devuelva una cadena de flores en orden alfabético separadas por
puntos.
 */

let entrada = 'Rosa, Tulipán, Orquídea, Lirio';


function gestionarFloreria(entrada) {

    let flores = entrada.split(',');

    for (let i = 0; i < flores.length; i++) {
        flores[i] = flores[i].trim();
    }

    let resultado = flores.join(', ')
    //Verifique si existe la flor "Margarita" y, si está presente, agregue
    //"Azucena" al final de la lista   

    if (flores.includes('Margarita')) {
        flores.push('Azucena')
        console.log('Lista actualizada ', flores.join(','));
    } else {
        console.log('La flor que esta buscando no se encuentra en la lista');
    }

    //Reemplace todas las flores "Orquídea" por "Clavel"

    let reemplazarFlor = entrada.split(',').map(flor => flor.trim().replace(/Orquídea/gi, 'Clavel'));

    //Encuentre el índice de la flor "Girasol" y, si no está presente, agregue
    //"Girasol" al inicio de la lista
    
    let indiceFlor = reemplazarFlor.findIndex(flor=> flor== 'Girasol');

    if (indiceFlor == -1) {
        reemplazarFlor.unshift('Girasol')
        console.log('Lista actualizada ', reemplazarFlor.join(','))
    }

    //Devuelva una cadena de flores en orden alfabético separadas por
    //puntos

    let cadenaOrdenada = reemplazarFlor.sort().join('.')
    return {
        resultado,
        reemplazarFlor,
        indiceFlor,
        cadenaOrdenada
    }

}

console.log(gestionarFloreria(entrada)); 