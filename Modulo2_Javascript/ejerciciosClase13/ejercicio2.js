/**Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación */

const prompt = require("prompt-sync")({ sigint: true });

let nombreMascota = prompt('Indica el nombre de su mascota')

const verificarVacuna = (nombre, vacunado)=>{
    if (vacunado ==='si') {
        return `${nombre} esta vacunado `
    }else if (vacunado ==='no'){
        return `${nombre} no esta vacunado `
    }else{
        return `${nombre} no esta registrado `
    }
}
let estaVacunado = prompt('Seleccione si su mascosta esta vacunada : si o no ')
let resultado = verificarVacuna(nombreMascota, estaVacunado)

console.log(resultado);