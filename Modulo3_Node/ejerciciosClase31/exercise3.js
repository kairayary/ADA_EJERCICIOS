/**Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus
Propiedades
Objetivo: Convertir una cadena JSON a un objeto y acceder a sus
propiedades.
Instrucciones:
• Crea un archivo llamado exercise3.js.
• Define una cadena JSON que represente a un libro (incluye
campos como title, author, y year).
• Convierte la cadena JSON a un objeto y muestra cada propiedad
en la consola */

// Definir una cadena JSON que represente a un libro
const libroJSON = `{
    "title": "Cien Años de Soledad",
    "author": "Gabriel García Márquez",
    "year": 1967
  }`;
  
  // Convertir la cadena JSON a un objeto
  const libro = JSON.parse(libroJSON);
  
  // Acceder a las propiedades del objeto y mostrarlas en la consola
  console.log(`Título: ${libro.title}`);
  console.log(`Autor: ${libro.author}`);
  console.log(`Año de publicación: ${libro.year}`);
  