/**Declará las variables vehiculo y litrosConsumidos. A continuación,
realizá los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
✓ Si el vehículo es “coche”, el precio por litro es de $86.
✓ Si el vehículo es “moto”, el precio por litro es de $70.
✓ Si el vehículo es “autobús”, el precio por litro es de $55.
✓ Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al
total a pagar.
✓ Si los litros consumidos son mayores a 25, se ha de añadir $25 al
total a pagar.
Finalmente, imprimí en consola el total a pagar.
 */
let vehiculo = 'autobus'
let litrosConsumidos= 0;
let totalPagar;

switch (vehiculo) {
    case 'coche':
       if (litrosConsumidos>0 && litrosConsumidos<=25) {
        totalPagar= (litrosConsumidos * 86)+50;
        console.log(`El total a pagar por  ${litrosConsumidos} litros:${totalPagar} pesos `);
       } if (litrosConsumidos>25) {
        totalPagar = (litrosConsumidos * 86) + 25;
        console.log(`El total a pagar por  ${litrosConsumidos} litros:${totalPagar} pesos `);
       } else {
        console.log("No se hubo consumo");
       } 
        break;

    case 'moto':
        if (litrosConsumidos>0 && litrosConsumidos<=25) {
            totalPagar= (litrosConsumidos * 70)+50;
            console.log(`El total a pagar por  ${litrosConsumidos} litros:${totalPagar} pesos `);
           } if (litrosConsumidos>25) {
            totalPagar = (litrosConsumidos * 70) +25;
            console.log(`El total a pagar por  ${litrosConsumidos} litros:${totalPagar} pesos  `);
           } else {
            console.log("No se hubo consumo");
           } 
        break;

    case 'autobus':
        if (litrosConsumidos>0 && litrosConsumidos<=25) {
            totalPagar= (litrosConsumidos * 55)+50;
            console.log(`El total a pagar por  ${litrosConsumidos} litros:${totalPagar}  `);
           } if (litrosConsumidos>25) {
            totalPagar = (litrosConsumidos * 55) +25;
            console.log(`El total a pagar por  ${litrosConsumidos} litros:${totalPagar}  `);
           } else {
            console.log("No se hubo consumo");
           } 
        break;
    default:
        console.log('El vehiculo ingresado no es válido');
        break;
}