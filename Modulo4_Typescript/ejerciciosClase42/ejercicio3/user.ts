// Crea un módulo llamado user.ts que contenga una clase User con las siguientes
// propiedades:
// • name: string
// • age: number
// Exporta la clase User como exportación por defecto. En main.ts, importa User y crea
// una instancia de la clase, mostrando la información del usuario en la consola.

 export default class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name,
        this.age = age
    };

    mostrarInformacion(): void {
        console.log(`User Name: ${this.name}, Age: ${this.age}`);
    };
};

