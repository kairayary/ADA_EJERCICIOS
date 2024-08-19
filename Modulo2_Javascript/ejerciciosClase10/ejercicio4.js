/**Escribe un programa que solicite al usuario ingresar una contraseña. Si
la contraseña es incorrecta, debe volver a pedirla hasta que el usuario
ingrese la correcta. La contraseña correcta es "1234". */


const prompt = require("prompt-sync")({ sigint: true });

const contraseñaCorrecta= 1234;

let contraseña =0;

do {

    contraseña = parseInt(prompt('Ingrese contraseña '))
   if (contraseña !== contraseñaCorrecta) {
     console.log('Contraseña ingresada no es válida...Vuelva a intentar');
   }
  
    
} while (contraseña !==contraseñaCorrecta);

console.log('Ingreso exitoso');