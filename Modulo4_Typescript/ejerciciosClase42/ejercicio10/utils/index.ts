// Crea un archivo utils/index.ts que centralice las exportaciones de mathUtils.ts,
// stringUtils.ts, y user.ts. Asegúrate de que todas las funciones y clases se puedan
// importar desde utils/index.ts. En main.ts, importa lo necesario desde utils/index.ts y
// utiliza las funciones y clases en un solo flujo de trabajo, mostrando todos los
// resultados en la consola.




export * from '../../ejercicio1/mathUtils';
export * from '../../ejercicio2/stringUtils';
export { default as User } from '../../ejercicio3/user';

