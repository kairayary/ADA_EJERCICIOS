// 1. Declaración de variables

let edad = 42;
let nombre = "kaira";
let estaEstudiando = true;

//2. Declaración de constantes

const PI= 3.14;
const PAIS = "Venezuela";

//3. Tipos de datos

let cantidadDeLibros = 3;
let tituloLibro = "Como hacer que te pasen cosas buenas";
let esInteresante= true;
let temas = ["Sicologia", "Crecimiento", "Autoayuda"];
let autor ={
    nombre:"Mariam Rojas Estape",
    nacionalidad: "Española"

}

//4. Operaciones lógicas

let esMayorDeEdad = edad> 18;
let puedeVotar = esMayorDeEdad && estaEstudiando;

//5. Imprimir resultados
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Êstas estudiando?:", estaEstudiando);
console.log("Constante Pi:", PI);
console.log("Constante Pais:", PAIS);
console.log("Cantidad de libros:", cantidadDeLibros);
console.log("Titulo del libro:", tituloLibro);
console.log("Es interesante?:", esInteresante);
console.log("Temas del libro:", temas);
console.log("Autor del libro:", autor);
console.log("Es mayor de edad?:", esMayorDeEdad);
console.log("Puede Votar:", puedeVotar);