export class Pan { 

    tipo: string;
    precio: number;
    cantidadDisponible: number

    constructor(tipo:string, precio:number, cantidadDisponible: number) {
        this.tipo = tipo,
        this.precio = precio,
        this.cantidadDisponible = cantidadDisponible
        
    };

    //método para ajustar la cantidad de pan disponible después de un pedido
    restarCantidad(cantidad: number): void {
        this.cantidadDisponible -= cantidad;
    };
};