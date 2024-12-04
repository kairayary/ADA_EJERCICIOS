import Mueble from "./muebles";

function filtrarPorTipo(muebles: Mueble[],  tipo: string): Mueble[] {
   return muebles.filter((muebles) => muebles.tipo == tipo );
 }
function ordenarPorPrecio(muebles: Mueble[]): Mueble[] {
    return muebles.slice().sort((a, b) => a.precio - b.precio);
}

 export {ordenarPorPrecio, filtrarPorTipo}

