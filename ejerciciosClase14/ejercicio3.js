/**Creá la función backEnd() que recibirá 2 números como parámetros. La
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo
en cuenta los siguientes criterios:
✓ Si el número a imprimir es múltiplo del primer parámetro que se
ingresó, deberá mostrar el string “Back” en lugar del número.
✓ Si el número a imprimir es múltiplo del segundo parámetro ingresado,
deberá mostrar el string “End” en su lugar del número.
✓ Si el número a imprimir es múltiplo de ambos parámetros, deberá
mostrar el string “Back End” en lugar del número. */

function backEnd(num1, num2) {
    for (let index = 0; index <= 100; index++) {
        if (index % num1===0) {
            console.log(`Back`);
        } else if (index % num2===0) {
            console.log(`End`);

        }else if(index % num1===0 && index % num2===0 ){
            console.log(`BackEnd`);
        }else{
            console.log(`${index}`);
        }
    }
}

backEnd(6,10)