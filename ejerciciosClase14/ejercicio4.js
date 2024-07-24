/**En este ejercicio, trabajaremos con una lista de modelos de autos.
Implementa una función ultimaAparicionModeloAuto(modelo) que encuentre
y muestre la última posición en la lista donde aparece el modelo específico
de auto dado por modelo.
Datos Iniciales:

 */

/**✓ Utiliza un array llamado modelosAutos que contenga varios modelos
de autos, algunos repetidos para demostrar la funcionalidad de
lastIndexOf.*/

let modelosAutos = ['toyota', 'nissan', 'mazda', 'ford', 'fiat', 'toyota', 'kia']

/**✓ Implementa ultimaAparicionModeloAuto(modelo), que toma modelo
como parámetro (un string) y utiliza el método lastIndexOf para
encontrar la última posición en modelosAutos donde modelo aparece. */

let ultimaAparicionModeloAuto = (modelo) => {
    let ultimaPosicion = modelosAutos.lastIndexOf(modelo)


    /**✓ Si modelo se encuentra en el array, imprime por consola la posición
    encontrada (índice + 1 para mostrar el número de posición).
    ✓ Si modelo no está en el array, imprime un mensaje indicando que el
    modelo no está presente. */

    if (ultimaPosicion !== -1) {
        console.log(`El modelo '${modelo}' aparece por última vez en la posición ${ultimaPosicion + 1}.`);
    } else {
        console.log(`El modelo '${modelo}' no está presente en la lista.`);
    }
}

ultimaAparicionModeloAuto('toyota')