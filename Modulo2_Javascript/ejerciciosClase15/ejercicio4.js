/**Se está realizando el desarrollo de una aplicación para control de
gastos. Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una
semana y cada columna un día. Es decir fila 0, semana 1, fila 1,
semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana.
Recordemos que cada fila representa una semana, es decir, si nos
indican semana 2 tenemos que sumar la fila 1 de la matriz.
Recordar que las matrices comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto
nos solicitan dar el total de un día en particular, por ejemplo del día
3, acá también tengamos en cuenta lo que ocurre con las filas, ya
que las columnas también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el
mes.
✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por
columnas para resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar
el día que más gastos se realizaron.
✓ Posibles matrices para comprobar los resultados.
 Día       1     2   3    4   5    6  7
Semana 1 1135 2500 900 1600 2800 3650 1100
Semana 2 1750 1890 1900 1300 898 1750 2800
Semana 3 1700 1150 1690 1900 1770 4500 2560
Semana 4 800 1250 1430 2100 1980 1270 950
 */

const gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

function totalGastoSemana(semana) {

    return gastos.map(fila => fila.reduce((acc, val) => acc + val, 0));
}

// para sumar cada fila

const sumasFilas = totalGastoSemana(gastos);

sumasFilas.forEach((suma, index) => {
    console.log(`La suma de la semana ${index + 1} es: ${suma}`);
});


// Función para mostrar el valor de los gastos de un día específico
function totalDeUnDia(dia) {
    const diaIndex = dia - 1; // tengo que restar para que el dia corresponda con el indice en la matriz

    console.log(`Gastos del día ${dia}:`);

    for (let i = 0; i < gastos.length; i++) {
        console.log(`Semana ${i + 1}, Día ${dia}: ${gastos[i][diaIndex]}`);
    }
}

// Ejemplo de uso: Mostrar los gastos del día 3
totalDeUnDia(3);


// para calcular los gastos del mes 
 function totalGastosDelMes(params) {
    let total = 0;

    for (let fila = 0; fila < gastos.length; fila++) {
        for (let columna = 0; columna < gastos[fila].length; columna++) {
            total += gastos[fila][columna];
            
        }
        
    }
    return total;
 }

 const sumaTotalGastosDelMes = totalGastosDelMes(gastos);

 console.log(`El total de gastos realizados en el mes es: ${sumaTotalGastosDelMes}`);