// Crea un sistema de inventario para una tienda. Cada producto tendrá un
// nombre, una categoría y un precio. Usa un enum para representar las categorías
// de los productos. Además, el sistema debe permitir:
// • Agregar productos al inventario.
// • Mostrar todos los productos por categoría.
// • Calcular el precio total de todos los productos en el inventario


export enum Categoria {
    Frutas = 'Frutas',
    Lacteos = 'Lacteos',
    Proteinas = 'Proteinas',
    Verduras = 'Verduras'
}


export class Producto{
    nombre: string;
    categoria: Categoria;
    precio: number;

    constructor(nombre: string, categoria: Categoria, precio: number) {
        this.nombre = nombre,
            this.categoria = categoria
        this.precio = precio
    };


};

export class Inventario {

    producto: Producto[] = [];//array para almacenar instancias de productos
    constructor(producto: Producto[] = []) {
        this.producto = producto

    };

    agregarProducto(nombre: string, categoria: Categoria, precio: number): void {
        const producto = new Producto(nombre, categoria, precio);//instancia de producto
        this.producto.push(producto);//agregar productos
        console.log(`Producto ${nombre} agregado al inventario.`);
    };

    mostrarProductosPorCategoria(categoria: Categoria): void {

        //Filtrar productos por categoria
        const productosFiltrados = this.producto.filter(producto => producto.categoria === categoria);
        
        if (productosFiltrados.length === 0) {//si no hay producto muestra el mensaje
            console.log(`No hay productos en la categoría ${categoria}.`);

        } else {//si hay los lista con el precio
            console.log(`Productos en la categoría ${categoria}:`);
            productosFiltrados.forEach(producto => {
                console.log(`- ${producto.nombre}: $${producto.precio.toFixed(2)}`);
            });
        };
    };

   
    calcularPrecioTotal(): void {
        const precioTotal = this.producto.reduce((total, producto) => total + producto.precio, 0);
        console.log(`El precio total de todos los productos en el inventario es: $${precioTotal.toFixed(2)}`);
    };
};

