import { Pan } from './pan';
import { Pedido } from './pedido';

// Crear instancias de panes
const panBlanco = new Pan('Pan Blanco', 50, 10);
const panIntegral = new Pan('Pan Integral', 60, 5);
const panDeCenteno = new Pan('Pan de Centeno', 80, 8);

// Crear un nuevo pedido
const pedido = new Pedido();

// Agregar panes al pedido
pedido.agregarAlPedido(panBlanco, 4);
pedido.agregarAlPedido(panIntegral, 2);
pedido.agregarAlPedido(panDeCenteno, 10); 

// Mostrar resumen del pedido
pedido.mostrarResumen();