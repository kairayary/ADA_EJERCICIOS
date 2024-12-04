import {Person, createPerson } from './types';

const person: Person = createPerson('Marta', 25);

console.log(`Nombre: ${person.name}, Edad: ${person.age}`);