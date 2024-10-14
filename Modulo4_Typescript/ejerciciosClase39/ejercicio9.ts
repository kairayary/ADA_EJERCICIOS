// Crea un objeto llamado coche con las propiedades marca, modelo, y
// encendido (booleano). Define una función encenderCoche que acepte el objeto
// coche y cambie el valor de encendido a true. Muestra el estado del coche en la
// consola antes y después de llamar a la función.

let coche={
    marca: 'Toyota',
    modelo:'Yaris',
    encendido: false,
   
}

function encenderCoche(coche:{marca: string; modelo: string, encendido: boolean}): void {
   coche.encendido = true
};

// antes del cambio
console.log(`Estado del coche antes de encender: ${coche.encendido}`); // false


encenderCoche(coche);

// despues del cambio
console.log(`Estado del coche después de encender: ${coche.encendido}`)