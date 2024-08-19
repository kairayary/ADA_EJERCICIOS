/**Realizar una función que escriba una pirámide del 1 al 30 de la
siguiente forma:
1
22
333
4444
55555
666666 */

let i, repeticion;

for (let i = 1; i <= 30; i++) {

    let linea = '';
    for (let repeticion = 0; repeticion < i; repeticion++) {
       linea += i + '';
        
    }
    console.log(linea)
}