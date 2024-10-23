// 1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
// o Vehiculo: Clase base con propiedades como marca, modelo y un
// método para mostrar información del vehículo.
// o Coche: Clase que extiende Vehiculo e incluye una propiedad para
// tipoCombustible y un método para mostrar la información completa
// del coche.
// o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
// para cilindrada y un método para mostrar la información completa
// de la motocicleta.

class Vehiculo {

    marca: string;
    modelo:string;
    constructor(marca:string, modelo:string) {
        this.marca = marca,
        this.modelo = modelo
    };

    mostrarInformacion(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    };
};

 export class Coche extends Vehiculo {
     tipoCombustible: string;

    constructor(marca:string, modelo:string, tipoCombustible: string) {
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    };

    informacionCompleta(){
        return `${super.mostrarInformacion()}, Tipo de Combustible: ${this.tipoCombustible}`;
    };
};

class Motocicleta extends Vehiculo {

    cilindrada: number;
    constructor(marca:string, modelo:string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada= cilindrada;
    };

    InformacionMotocicleta(){
        return `${super.mostrarInformacion()}, Cilindrada: ${this.cilindrada}`;
    };
};

 const miCoche = new Coche ("Peugeot", "308", "Diesel");

 console.log(miCoche.informacionCompleta());

 const miMoto = new Motocicleta("Harley Davidson", "1915 11f", 700);

console.log(miMoto.InformacionMotocicleta());

 