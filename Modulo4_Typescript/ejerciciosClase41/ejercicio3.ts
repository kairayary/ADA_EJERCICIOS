// 1. Modifica el objeto del ejercicio anterior para que incluya un método
// llamado descripcion() que devuelva una descripción del libro.
// 2. Llama al método y muestra el resultado en la consola.

export class Libro {

    titulo: string;
    autor: string;
    anioPublicacion:number
    
    constructor(titulo: string, autor: string, anioPublicacion: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }

    public descripcion(): void{
        console.log(`Descripción: Titulo: ${this.titulo}, Autor: ${this.autor}, Año de Publicación:${this.anioPublicacion}  `);
    }
}

// 2. Crea una instancia del objeto (Libro) y muestra sus propiedades en la consola.
let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

libro1.descripcion();
