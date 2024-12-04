// Crea un módulo shapes.ts que contenga las clases Circle y Square. Cada clase debe
// tener un constructor que acepte las dimensiones necesarias y un método para
// calcular el área. Exporta ambas clases como exportaciones nombradas. En main.ts,
// importa las clases y crea instancias de cada una para calcular y mostrar el área
// en la consola

 export class Circle {
      radius: number;
     

    constructor(radius: number) {
        this.radius = radius
        
    };

    areaOfCircle(): number {
        return Math.PI * this.radius * this.radius
    };

  
};


export class Square {

    side: number;

    constructor(side: number) {
        this.side = side
    };

    areaOfSquare(): number {
        return this.side * this.side
    }
};