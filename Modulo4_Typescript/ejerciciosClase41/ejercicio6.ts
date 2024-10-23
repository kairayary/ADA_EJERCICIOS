// 1. Crea una clase llamada Mariposa con propiedades nombre y color, y un
// método volar() que use this para referirse a las propiedades de la
// instancia.
// 2. Crea una instancia de la clase y llama al método.

class Mariposa {
    nombre : string;
    color : string;

    constructor(nombre : string, color : string) {
        this.nombre= nombre;
        this.color = color;
    }

    volar(): string{
        return `La mariposa de nombre ${this.nombre} es de color ${this.color} años.`;
        
    }
}

 const mariposa = new Mariposa('Azucena', 'Naranja');
console.log(mariposa.volar());


 