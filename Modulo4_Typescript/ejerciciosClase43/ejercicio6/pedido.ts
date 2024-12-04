// pedido.ts
import { Pan } from './pan';
import { calcularTotal } from './utils';

export class Pedido {
    
    private panesPedido: { pan: Pan, cantidad: number }[] = [];

    agregarAlPedido(pan: Pan, cantidad: number): void {
        // Verificar disponibilidad y ajustar cantidad si es necesario
        if (cantidad > pan.cantidadDisponible) {
            console.log(`Solo hay ${pan.cantidadDisponible} unidades de ${pan.tipo} disponibles. Ajustando pedido.`);
            cantidad = pan.cantidadDisponible;
        };

        // Agregar pan al pedido y reducir la cantidad en el inventario
        if (cantidad > 0) {
            this.panesPedido.push({ pan, cantidad });
            pan.restarCantidad(cantidad);
        } else {
            console.log(`No hay suficiente inventario para ${pan.tipo}.`);
        };
    };

    calcularTotalPedido(): number {
        return calcularTotal(this.panesPedido);
    };

    mostrarResumen(): void {
        console.log("Resumen del Pedido:");
        this.panesPedido.forEach(({ pan, cantidad }) => {
            console.log(`- ${cantidad} x ${pan.tipo} a $${pan.precio} cada uno`);
        });
        console.log(`Total: $${this.calcularTotalPedido()}`);
    };
};
