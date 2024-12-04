import { Producto, Inventario, Categoria } from "./inventarioTienda";
const inventarioTienda = new Inventario();

// Agregar productos
inventarioTienda.agregarProducto('Manzana', Categoria.Frutas, 1200);
inventarioTienda.agregarProducto('Leche', Categoria.Lacteos, 1180);
inventarioTienda.agregarProducto('Pollo', Categoria.Proteinas, 2000);
inventarioTienda.agregarProducto('Zanahoria', Categoria.Verduras, 800);

// Mostrar productos por categoría
inventarioTienda.mostrarProductosPorCategoria(Categoria.Frutas);
inventarioTienda.mostrarProductosPorCategoria(Categoria.Lacteos);

// Calcular precio total
inventarioTienda.calcularPrecioTotal();
