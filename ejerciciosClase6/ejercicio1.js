const prompt = require("prompt-sync")({ sigint: true });

// Para saber si la Fiambrería esta abierta o cerrada

let open, closed, currentTime;

do {
    open = parseInt(prompt('Indique el horario de apertura de la Fiambrería: '));
    if (isNaN(open)) {
        console.log('Por favor ingrese un horario válido');
    }
} while (isNaN(open));

do {
    closed = parseInt(prompt('Indique el horario de cierre de la Fiambrería: '));
    if (isNaN(closed)) {
        console.log('Por favor ingrese un horario válido');
    }
} while (isNaN(closed));

do {
    currentTime = parseInt(prompt('Ingrese la hora actual: '));
    if (isNaN(currentTime)) {
        console.log('Por favor ingrese un hora válido');
    }
} while (isNaN(currentTime));

let amountCheese = 100; 
if (currentTime >= open && currentTime <= closed) {
    console.log(`La fiambrería está abierta puedes comprar ${amountCheese} gramos de queso`);
} else {
    console.log("La fiambrería está cerrada");
}



