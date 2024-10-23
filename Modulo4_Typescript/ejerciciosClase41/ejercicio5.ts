// 1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
// método presentarse().
// 2. Crea una clase llamada Persona que implemente esta interfaz y
// proporciona la implementación del método presentarse().


interface IPersona {
    nombre: string;
    edad: number;
    presentarse(): string;
}

class Persona implements IPersona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}


 export const persona = new Persona('Maria Mendoza', 73);
console.log(persona.presentarse()); 