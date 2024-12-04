// Crea un sistema de gestión de reservas para un hotel. Cada reserva debe tener
// el nombre del huésped, la cantidad de noches y el tipo de habitación. Usa una
// tupla para almacenar la información de cada reserva. Además:
// • Implementa una función que agregue una nueva reserva al sistema.
// • Implementa una función que calcule el costo total de todas las reservas,
// teniendo en cuenta el tipo de habitación (usa un enum para los tipos de
// habitación: Estandar, Suite, Premium).
// • El sistema debe permitir listar todas las reservas y calcular el ingreso total
// del hotel.
// Requerimientos:
// • Usa un enum para los tipos de habitación y asigna precios diferentes a
// cada tipo.
// • Crea un array para almacenar las reservas.
// • Modulariza el código en al menos dos módulos: uno que maneje la lógica
// de las reservas y otro que sea el módulo principal.


 export enum tipoHabitaciones{
    Estandar= 1000,
    Doble= 2000,
    Suite = 3500, 
    Ejecutiva = 4300,
    Familiar = 3000
}

//dupla
type InfoReserva = [string, number,  tipoHabitaciones];

export class sistemaReservas {
    //propiedad reservas
    reservas: InfoReserva[] = [];
  constructor(){
    this.reservas = []
  }
    agregarReserva(nombre: string, cantidadNoches: number, tipoHabitacion: tipoHabitaciones): void {
       //crea la tupla reservacion
        const reservacion: InfoReserva = [nombre, cantidadNoches, tipoHabitacion];
        //agrega la tupla al array de tuplas reservas
        this.reservas.push(reservacion);
        console.log(`Reserva para ${nombre} agregada.`);
    };

    listarReserva():void{
        this.reservas.forEach(([nombre, cantidadNoches, tipoHabitacion], index) => {
            const costo = cantidadNoches * tipoHabitacion;
            console.log(
                `Reserva ${index + 1}: Huésped - ${nombre}, Noches - ${cantidadNoches}, Tipo - ${tipoHabitaciones[tipoHabitacion]}, Costo - $${costo}`
            );
        });
    }

    totalTodasReservas(): void {
        const total = this.reservas.reduce((suma, reserva) => suma + reserva[1] * reserva[2], 0);
        console.log(`Ingreso total del hotel: $${total}`);
    }
};



