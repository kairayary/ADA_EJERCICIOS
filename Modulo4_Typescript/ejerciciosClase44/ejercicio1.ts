// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
// bucle for...in para recorrer y mostrar cada propiedad y su valor.

export const persona ={
   nombre:'Maria',
   edad:72,
   ciudad:'El tigre'
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad as keyof typeof persona]}`);
};
