import  Mueble  from "./muebles";
import { ordenarPorPrecio, filtrarPorTipo } from "./utils";

class InventarioMuebles {

    private inventario: Mueble[];

    constructor() {
        this.inventario = []
    }

    agregarMueble(mueble: Mueble) {
        this.inventario.push(mueble);
    }

    obtenerInventario() {
        return this.inventario;
    }

    obtenerMueblesPorTipo(tipo: string): Mueble[] {
        return filtrarPorTipo(this.inventario, tipo);
    }
   
    obtenerMueblesOrdenadosPorPrecio(): Mueble[] {
        return ordenarPorPrecio(this.inventario);
    }
}

export default InventarioMuebles;