import {add, subtract, capitalize, reverse, User } from './utils';

const sum = add(5, 10);
const rest = subtract(4, 3);

const upper = capitalize('hello');
const invert = reverse('hello');

const user1 = new User( 'Mayra', 68);

user1.mostrarInformacion();

console.log('Suma:', sum);
console.log('Resta:', rest);
console.log('Texto inicial mayúscula:', upper);
console.log('Texto invertido:', invert);
console.log('Información usuario:', user1);