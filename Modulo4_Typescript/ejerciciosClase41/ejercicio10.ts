// Crea un sistema para registrar Estudiantes con las siguientes clases:
// o Estudiante: Clase que incluye propiedades como nombre, edad y
// curso, además de un método que muestre la información del
// estudiante.
// o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con
// métodos para agregar un estudiante y mostrar todos los estudiantes
// registrados.

class Estudiante {
     nombre: string;
     edad:number;
     curso: string;

    constructor(nombre: string, edad:number, curso: string) {
        this.nombre = nombre,
        this.edad = edad,
        this.curso = curso
    };

    informacionEstudiante(){
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso} `
    };
};

class RegistroEstudiantes {
    private estudiantes: Estudiante[] = [];

    
    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    }

  
    mostrarEstudiantes(): void {
        if (this.estudiantes.length === 0) {
            console.log("No hay estudiantes registrados.");
        } else {
            this.estudiantes.forEach(estudiante => {
                console.log(estudiante.informacionEstudiante());
            });
        }
    }
}


const registro = new RegistroEstudiantes();

const estudiante1 = new Estudiante("Juan Pérez", 20, "Matemáticas");
const estudiante2 = new Estudiante("María García", 22, "Física");

registro.agregarEstudiante(estudiante1);
registro.agregarEstudiante(estudiante2);

registro.mostrarEstudiantes();