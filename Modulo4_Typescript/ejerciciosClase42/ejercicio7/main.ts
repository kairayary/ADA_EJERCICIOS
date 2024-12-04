import { Circle, Square } from "./shape";

const circle = new Circle(5);

const square = new Square(4);

console.log(`Área del círculo con radio ${circle.radius}: ${circle.areaOfCircle()}`);
console.log(`Área del cuadrado con lado ${square.side}: ${square.areaOfSquare()}`);