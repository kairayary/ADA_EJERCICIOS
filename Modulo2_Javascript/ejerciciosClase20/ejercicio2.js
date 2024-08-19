/**Tenemos un array en una variable librosDeJS con una lista de libros de
javascript. Queremos saber la cantidad de libros que tenemos en el array
Nos pidieron que evitemos usar la propiedad length para contar los
elementos de un array y que tenemos que usar si o si un forEach
Completá el siguiente código para que funcione el último console.log() y
muestre el mensaje Mi lista de libros de JavaScript tiene 9 libros. */

const librosDeJS = [
    'Javascript for kids: A Payful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Morden Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Aplications: Robust Web Architecture with Node, HTML5, and Mordens JS Libraries',
    'Effective JavaScript: 68Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Defenitive Guide',
    'You Don`t Know JS',
    'JvaScript Allonge: The Six Edition'
];


let contador = 0;
librosDeJS.forEach(librosDeJS => {
    contador ++
});

console.log('Mi lista de libros de JavaScript tiene ' + contador + ' libros');
