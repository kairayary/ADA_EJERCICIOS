// Crea una función llamada listarLibros que acepte un array de objetos
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
// función debe recorrer el array y mostrar los detalles de cada libro en la consola.

type Libro = {
    titulo: string;
    autor: string;
};


function listarLibros(libros: Libro[]): void {
    libros.forEach((libro, index) => {
        console.log(`Libro ${index + 1}:`);
        console.log(`Título: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
        console.log('---');
    });
}

// Ejemplo de uso
const libros: Libro[] = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" }
];

// Llamar a la función listarLibros
listarLibros(libros);
