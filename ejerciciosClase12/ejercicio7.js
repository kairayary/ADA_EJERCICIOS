/**Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación. */

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt('Ingrese el nombre de su mascota ');
let vacunado = parseInt(prompt('Indique si esta vacunada 1) Si ó 2)No '));

let estadoVacunas = (param1, param2)=> {
    if (vacunado===1 ) {
        console.log( `Su mascota de nombre ${nombre} ESTA vacunado`);
    }else if (vacunado===2){
        console.log( `Su mascota de nombre ${nombre} NO esta vacunado`);
    }else{
        console.log(`Su mascota de nombre ${nombre} no está registrado`);
    }
}

estadoVacunas()