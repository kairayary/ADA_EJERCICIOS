import Auto from './auto';

//ordenar el array autos en orden ascendente de acuerdo con el valor de año.
function ordenarPorAño(autos: Auto[]) {
  return autos.sort((a, b) => a.año - b.año);
}

function ordenarPorMarca(autos: Auto[]) {
  return autos.sort((a, b) => a.marca.localeCompare(b.marca));
}

export { ordenarPorAño, ordenarPorMarca };