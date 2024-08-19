/**Crea un objeto literal que represente un estudiante. El mismo debe tener
las siguientes propiedades: nombre, edad y un array de notas (con 5
notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo
realizar las siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto
investiga sobre el método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de
las notas.
 */


let alumno = {
    nombre: "Gime",
    edad: 33,
    notas: [8, 9, 8, 7, 5]
};

const procesarEstudiantes = (alumno) => {
    alumno.notas.push(4);
    alumno.notas.shift(); 
    
    let acum = 0;
    for (let i = 0; i < alumno.notas.length; i++) {
        acum += alumno.notas[i];
    }
    
    let promedio = acum / alumno.notas.length;
    // console.log("El promedio de notas es " + promedio);

    let nombreMayuscula = alumno.nombre.toUpperCase()
    return {
        nombre : nombreMayuscula,
        promedio : promedio
    }
};
console.log(procesarEstudiantes(alumno));