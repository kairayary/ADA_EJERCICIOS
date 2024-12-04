// Crea una clase genérica Caja que almacene un valor de cualquier tipo y tenga
// un método para obtener el valor almacenado.

class Caja<T> {

    contenido: T;
    constructor(valor:T) {
        this.contenido=valor;
    };

    obtenerContenido():T{
        return this.contenido;
    };
};

// Prueba con un número
const cajaNumero = new Caja<number>(123);
console.log(cajaNumero.obtenerContenido()); // Salida: 123

// Prueba con un string
const cajaString = new Caja<string>("Hola Mundo");
console.log(cajaString.obtenerContenido()); // Salida: Hola Mundo

// Prueba con un booleano
const cajaBooleano = new Caja<boolean>(true);
console.log(cajaBooleano.obtenerContenido()); // Salida: true

// Prueba con un objeto
const cajaObjeto = new Caja<{ nombre: string; edad: number }>({ nombre: "Juan", edad: 30 });
console.log(cajaObjeto.obtenerContenido()); // Salida: { nombre: "Juan", edad: 30 }