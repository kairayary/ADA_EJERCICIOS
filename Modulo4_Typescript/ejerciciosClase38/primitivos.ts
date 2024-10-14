// Ejemplo de tipos primitivos en TypeScript
// 1. String (Cadena de texto)
let nombre1: string = "Berni Bauque";
let saludo: string = `Hola, ${nombre1}, bienvenida a TypeScript!`;
console.log(saludo);

//2. number(Números: enteros,decimales, notación cientifica)

let entero: number = 42;
let decimal: number = 3.14;
let cientificos: number = 1e5;
console.log("Entero: ", entero);
console.log("Decimal: ", decimal);
console.log("Cientifico: ", cientificos);

//3. boolean(Valores lógicos: true y false)
let esProfesor: boolean = true;
let tienesTitulo: boolean = false;
console.log("Es profesor?: ", esProfesor);
console.log("Tiene Titulo?: ", tienesTitulo);

//4. null (Ausencia intencional de valor)

let valorNull: null = null;
console.log("Valor indefinido: ", valorNull);

//5. Undefined (Valor no iniciado)

let valorIndefinido: undefined= undefined;
console.log("Valor indefenido: ", valorIndefinido);


