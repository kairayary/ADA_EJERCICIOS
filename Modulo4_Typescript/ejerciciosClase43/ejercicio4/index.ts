import Concesionaria from './concesionaria';

const concesionaria = new Concesionaria();

// Agregar autos
concesionaria.agregarAuto({ marca: 'Toyota', modelo: 'Yaris', año: 2015, color: 'Gris' });
concesionaria.agregarAuto({ marca: 'Ford', modelo: 'Fusion', año: 2018, color: 'Negro' });
concesionaria.agregarAuto({ marca: 'Chevrolet', modelo: 'Cruze', año: 2012, color: 'Blanco' });

console.log('Inventario inicial:');
console.log(concesionaria.obtenerInventario());

// Ordenar por año
concesionaria.ordenarPorAño();
console.log('Inventario ordenado por año:');
console.log(concesionaria.obtenerInventario());

// Ordenar por marca
concesionaria.ordenarPorMarca();
console.log('Inventario ordenado por marca:');
console.log(concesionaria.obtenerInventario());

// Eliminar auto
concesionaria.eliminarAuto('Toyota', 'Yaris');
console.log('Inventario después de eliminar auto:');
console.log(concesionaria.obtenerInventario());