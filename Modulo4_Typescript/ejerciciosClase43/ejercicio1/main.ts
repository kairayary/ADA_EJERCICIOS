import { Empleado } from "./empleado";

// Crea el array de empleados
const empleados: Empleado[] = [
    new Empleado('Juan Pérez', 'Desarrollador', 4500, ['JavaScript', 'TypeScript']),
    new Empleado('Ana Gómez', 'Diseñadora', 5500, ['Photoshop', 'Illustrator']),
    new Empleado('Carlos López', 'Gerente', 6000, ['Gestión', 'Liderazgo']),
    new Empleado('Lucía Martínez', 'Analista', 4000, ['SQL', 'Excel'])
];


// Agregar nuevas habilidades
empleados[0].agregarHabilidad('React');
empleados[1].agregarHabilidad('Java');

// Función para mostrar empleados con salario anual mayor a $50,000
function mostrarEmpleadosConSalarioAlto(empleados: Empleado[]): void {
    console.log('Empleados con salario anual mayor a $50,000:');
    empleados.forEach(empleado => {
        if (empleado.obtenerSalarioAnual() > 50000) {
            console.log(empleado.mostrarInformacion());
        }
    });
}


mostrarEmpleadosConSalarioAlto(empleados);