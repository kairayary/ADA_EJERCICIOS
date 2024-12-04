
// Implementa un sistema para una concesionaria que gestione su inventario de
// autos mediante módulos. Los autos deben tener marca, modelo, año y color.
// Además de las funcionalidades básicas de agregar y eliminar autos, el sistema
// debe incluir la opción de ordenar los autos por año o marca. Debe haber una
// clase Concesionaria para gestionar el inventario y un archivo separado para las
// utilidades de ordenamiento.
// Estructura de Archivos:

// • auto.ts: Define la interfaz Auto.
// • concesionaria.ts: Implementa la clase Concesionaria que gestiona el
// inventario.
// • utils.ts: Incluye funciones para ordenar los autos.
// • index.ts: Archivo principal que conecta todo.

interface Auto {
    marca: string;
    modelo: string;
    año: number;
    color: string;
  }
  
export default Auto;