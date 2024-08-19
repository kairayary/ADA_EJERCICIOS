const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    curso: "Programación Web",
    notas: [85, 90, 78, 92]
  };

  let objetoCadena = JSON.stringify(estudiante);
  console.log(objetoCadena);
  

  let cadenaObjeto = JSON.parse(objetoCadena);
  console.log(cadenaObjeto);
  