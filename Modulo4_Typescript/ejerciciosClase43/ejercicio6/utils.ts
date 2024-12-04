import { Pan } from './pan';

export function calcularTotal(panesPedido: { pan: Pan, cantidad: number }[]): number {
    return panesPedido.reduce((total, { pan, cantidad }) => total + pan.precio * cantidad, 0);
};