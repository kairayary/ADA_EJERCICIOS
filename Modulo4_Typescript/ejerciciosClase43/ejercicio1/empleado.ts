// Desarrolla un sistema para gestionar empleados en una empresa. Cada
// empleado tendrá un nombre, un cargo, un salario y una lista de habilidades. Usa
// una clase Empleado que contenga estos atributos, y un array que gestione a
// varios empleados.
// Requerimientos:
// • Implementa métodos en la clase Empleado para agregar nuevas
// habilidades y para obtener el salario anual.
// • Crea una función que reciba un array de empleados y muestre la
// información de aquellos que tengan un salario mayor a $50,000.
// • Modulariza el código en al menos dos módulos: uno que defina la clase
// Empleado y otro para la lógica principal.
// Pistas:
// • El salario anual es simplemente el salario mensual multiplicado por 12.
// • Las habilidades se pueden almacenar como un array de strings dentro del
// empleado.

export class Empleado {

    nombre: string;
    cargo: string;
    salario: number;
    habilidades: string[]

    constructor(nombre: string, cargo:string, salario: number, habilidades: string[] = []) {
        this.nombre = nombre,
        this.cargo= cargo,
        this.salario= salario,
        this.habilidades =habilidades
    };

    agregarHabilidad(habilidad: string):void{
         this.habilidades.push(habilidad)
    };

    obtenerSalarioAnual():number{
      return this.salario * 12
    };

    mostrarInformacion(): string {
        return `Nombre: ${this.nombre}, Cargo: ${this.cargo}, Salario Mensual: $${this.salario}, Salario Anual: $${this.obtenerSalarioAnual()}, Habilidades: ${this.habilidades.join(', ')}`;
    };
};