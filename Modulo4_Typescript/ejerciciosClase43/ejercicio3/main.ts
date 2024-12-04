import {tipoHabitaciones, sistemaReservas } from './reservasHotel';

const sistemaHotel = new sistemaReservas();

// Agregar reservas
sistemaHotel.agregarReserva("Juan Pérez", 3, tipoHabitaciones.Estandar);
sistemaHotel.agregarReserva("Ana López", 2,tipoHabitaciones.Suite);
sistemaHotel.agregarReserva("Carlos Gómez", 4, tipoHabitaciones.Familiar);

// Listar todas las reservas
sistemaHotel.listarReserva();

// Calcular ingreso total
sistemaHotel.totalTodasReservas();