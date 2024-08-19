/**Crear un array de objetos llamado mascotas que contenga al menos 5
mascotas. Cada mascota debe tener las siguientes propiedades:
✓ id (número)
✓ nombre (string)
✓ especie (string)
✓ edad (número)
✓ disponible (booleano) */

let mascotas = [
    { id: 1, nombre: 'Khalua', especie: 'Perro', edad: 11, disponible: 'true' },
    { id: 2, nombre: 'Blanca', especie: 'Perro', edad: 11, disponible: 'true' },
    { id: 3, nombre: 'Luna', especie: 'Hamster', edad: 3, disponible: 'true' },
    { id: 4, nombre: 'Estrellita', especie: 'Hamster', edad: 2, disponible: 'true' },
    { id: 5, nombre: 'Don gato', especie: 'Gato', edad: 5, disponible: 'true' },
]


/**Crear un array de objetos llamado propietarios con al menos 3
propietarios. Cada propietario debe tener:
✓ id (número)
✓ nombre (string)
✓ email (string)
✓ mascotasAdoptadas (array de ids de mascotas) */

let propietarios = [
    { id: 1, nombre: 'Valeria', email: 'valeria@micorreo.com', mascotasAdoptadas: [1, 3] },
    { id: 2, nombre: 'Miguel', email: 'miguel@micorreo.com', mascotasAdoptadas: [2, 4] },
    { id: 3, nombre: 'Ivanna', email: 'ivanna@micorreo.com', mascotasAdoptadas: [5] },
]

/**Implementar una función agregarMascota(id, nombre, especie, edad)
que agregue una nueva mascota al array mascotas. */

// function generarNuevoId(mascotas, propietarios) {
//     let maxId = mascotas.reduce((max, mascota) => (mascota.id > max ? mascota.id : max), 0);
//     return maxId + 1;
// }

function agregarMascota( nombre, especie, edad) {
    let id = mascotas.length + 1;
    let nuevaMascota = { nombre, especie, edad};
    mascotas.push(nuevaMascota);
    return nuevaMascota;
}


let mascotaAgregada = agregarMascota('Mia', 'Perro', 11)

console.log('Original', mascotas);
console.log('Actualizada', mascotaAgregada);

/** Crear una función buscarMascota(criterio, valor) que permita buscar
mascotas por nombre o especie. */

function buscarMascota(criterio, valor) {
    return mascotas.filter(mascota => mascota[criterio] === valor);
};

let resultadoNombre = buscarMascota('nombre', 'Khalua');
console.log('Buscar por nombre "Khalua":', resultadoNombre);

let resultadoEspecie = buscarMascota('especie', 'Perro');
console.log('Buscar por especie "Perro":', resultadoEspecie);

/**Implementar una función registrarPropietario(nombre, email) que
agregue un nuevo propietario al array propietarios. */

function registrarPropietario(nombre, email) {
    let id = propietarios.length + 1;
    let nuevoPropietario = {id, nombre, email};
    propietarios.push(nuevoPropietario);
}

// let nuevoPropietario = { nombre: 'Mia', especie: 'Perro', edad: 11 }
let propietarioActualizada = registrarPropietario('Maria', 'maria@micorreo.com')

console.log('Original', propietarios);
console.log('Actualizada', propietarioActualizada);