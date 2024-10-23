// 1. Define una clase Coche con propiedades marca, modelo (públicas) y
// precio (privada).
// 2. Implementa un método para mostrar la información del coche que acceda
// a las propiedades públicas y no a la privada directamente.

class Coche {

    public marca: string;
    public modelo: string;
    private _precio: number;

    constructor(marca: string, modelo: string, _precio: number) {
        this.marca= marca,
        this.modelo = modelo,
        this._precio = _precio
    }


    mostrarInformacion(){
        return `Coche: ${this.marca} ${this.modelo}, Precio: ${this.obtenerPrecio()}`;
    }

    obtenerPrecio(){
        return this._precio
    }
}

const miCoche = new Coche('Toyota', 'Yaris', 200000);
console.log(miCoche.mostrarInformacion());