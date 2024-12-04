import  {createMultiplier}  from './higherOrderFunctions'

const multiplyByTwo = createMultiplier(2); //multiplicador
const result = multiplyByTwo(5); // Multiplica 5 por 2

console.log(`Resultado de multiplicar 5 por 2: ${result}`);