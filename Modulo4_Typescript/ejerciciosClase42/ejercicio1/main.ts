import { add, subtract } from './mathUtils';

const num1 = 78;
const num2 = 43;

const suma = add(num1, num2);
const resta = subtract(num1, num2);

console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
console.log(`La resta de ${num1} y ${num2} es: ${resta}`);