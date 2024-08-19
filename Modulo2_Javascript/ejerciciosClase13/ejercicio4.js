/**Escribí un programa que imprima los números pares del 0 al 100. No es
necesario pedirle al usuario, solo imprimir el resultado. Agreguen los
números pares a un array.
Pista: Usa un ciclo */

let numerosPares =[];
let index = 0

for (let i = 1; i <= 100; i++) {
    if (i %2 === 0) {
     numerosPares[index] = i
     index++
    }
    
}

console.log(numerosPares);