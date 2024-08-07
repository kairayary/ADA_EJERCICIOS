/** Crear una función que imprima todos los dígitos decimales, del 0
al 9, usando un ciclo For. */

let incremento = 0.01;
function imprimirNumerosDecimales(incremento) {
    for (let i = 0; i <= 9; i += incremento) {
      console.log(i.toFixed(2));
    }
  }
  
 
  imprimirNumerosDecimales(incremento);