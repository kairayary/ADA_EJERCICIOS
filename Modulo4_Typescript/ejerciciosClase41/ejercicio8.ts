// 1. Crea un pequeño sistema de gestión de Animales que incluya las clases
// Animal, Mascota, y MascotaExotica.
// o La clase Animal debe tener propiedades como nombre y tipo.
// o La clase Mascota debe extender Animal e incluir una propiedad para
// dueño.
// o La clase MascotaExotica debe extender Animal e incluir una
// propiedad para habitat.
// 2. Implementa métodos para mostrar información sobre cada tipo de animal
// y agrega ejemplos de instanciación.

export class Animal {

    nombre : string;
    tipo: string;
    constructor(nombre: string, tipo: string) {
        this.nombre = nombre,
        this.tipo = tipo
    }

    mostrarAnimal(){
        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
    }
}

class Mascota extends Animal{

    dueño: string;
    constructor(nombre: string, tipo: string,dueño: string) {

        super(nombre, tipo);
        this.dueño = dueño
    }

    mostrarMascota(){
        return  `${super.mostrarAnimal()}, Dueño: ${this.dueño}`;
    }
}

class MascotaExotica extends Animal {

    habitat: string;
    constructor(nombre: string, tipo: string, habitat: string) {
        super (nombre, tipo),
        this.habitat = habitat
    }

    mostrarMascotaExotica(){
        return `${super.mostrarAnimal()}, Habitat: ${this.habitat}`;
    }
}

const perro = new Mascota('Khalua', 'Perro', 'Valeria');
const guacamaya = new MascotaExotica('Lunita', 'Guacamaya', 'Selva Tropical');

console.log(perro.mostrarMascota());
console.log(guacamaya.mostrarMascotaExotica());