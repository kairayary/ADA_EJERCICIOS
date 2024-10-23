// 1. Define un objeto que represente un libro con las siguientes propiedades:
// título, autor, y año de publicación.
// 2. Crea una instancia de ese objeto y muestra sus propiedades en la consola

export class Libro {

    titulo: string;
    autor: string;
    anioPublicacion:number
    
    constructor(titulo: string, autor: string, anioPublicacion: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
}

// 2. Crea una instancia del objeto (Libro) y muestra sus propiedades en la consola.
let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

console.log(libro1);
