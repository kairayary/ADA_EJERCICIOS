const fs = require('fs');

// Leer el archivo data.json
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Convertir el contenido JSON a un objeto JavaScript
  const persona = JSON.parse(data);

  // Modificar el campo age
  persona.age = 35; // Cambia este valor al que desees

  // Convertir el objeto modificado a una cadena JSON
  const personaModificada = JSON.stringify(persona, null, 2);

  // Guardar el archivo modificado
  fs.writeFile('data.json', personaModificada, 'utf8', (err) => {
    if (err) {
      console.error('Error al guardar el archivo:', err);
      return;
    }
    console.log('Archivo modificado y guardado correctamente.');
  });
});
