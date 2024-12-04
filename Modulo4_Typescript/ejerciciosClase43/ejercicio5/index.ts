// Crea un programa para una tienda de muebles que gestione el inventario
// modularizado. Los muebles deben tener tipo, material, y precio. El programa
// debe permitir filtrar los muebles por tipo, además de poder ordenarlos por
// precio. Implementa estas funcionalidades utilizando módulos separados para los
// muebles y las utilidades.
// Estructura de Archivos:

// • mueble.ts: Define la interfaz Mueble.
// • inventario.ts: Implementa la clase InventarioMuebles que gestiona los
// muebles.
// • utils.ts: Incluye funciones para filtrar y ordenar muebles.
// • index.ts: Archivo principal.


import InventarioMuebles from "./inventario";
import  Mueble  from "./muebles";

const inventario = new InventarioMuebles()

// Agregar muebles al inventario
inventario.agregarMueble({ tipo: "Silla", material: "Madera", precio: 50 });
inventario.agregarMueble({ tipo: "Mesa", material: "Metal", precio: 150 });
inventario.agregarMueble({ tipo: "Silla", material: "Plástico", precio: 30 });
inventario.agregarMueble({ tipo: "Sofá", material: "Cuero", precio: 300 });

// Mostrar inventario completo
console.log("Inventario completo:", inventario.obtenerInventario());

// Filtrar muebles por tipo
console.log("Sillas en inventario:", inventario.obtenerMueblesPorTipo("Silla"));

// Ordenar muebles por precio
console.log("Inventario ordenado por precio:", inventario.obtenerMueblesOrdenadosPorPrecio());