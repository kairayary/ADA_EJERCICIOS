// Crea un objeto llamado deportista que tenga las propiedades nombre
// (string), deporte (string), y energia (number). Luego, define una función entrenar
// que acepte el objeto deportista y un número de horas de entrenamiento,
// disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
// final, muestra el estado del deportista en la consola

let deportista: {nombre: string; deporte: string, energia: number }={
    nombre: 'roger',
    deporte:'tenis',
    energia: 100,
   
}

function entrenar(deportista:{nombre: string; deporte: string, energia: number }, hora : number) {
    deportista.energia -= hora * 5
    console.log(`Después de entrenar, ${deportista.nombre} tiene ${deportista.energia} de energía.`);
    
}

entrenar(deportista, 5)