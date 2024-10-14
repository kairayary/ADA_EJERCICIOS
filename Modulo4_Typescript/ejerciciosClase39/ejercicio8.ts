// Crea una función llamada calcularArea que acepte el tipo de figura
// ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
// tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
// función debe retornar el área de la figura. Usa tipos específicos para cada caso.



type FiguraCirculo = { tipo: "circulo", radio: number };
type FiguraRectangulo = { tipo: "rectangulo", largo: number, ancho: number };


type Figura = FiguraCirculo | FiguraRectangulo;


function calcularArea(figura: Figura): number {
    if (figura.tipo === "circulo") {
        return Math.PI * figura.radio * figura.radio; // Área del círculo
    } else if (figura.tipo === "rectangulo") {
        return figura.largo * figura.ancho; // Área del rectángulo
    } 
    return figura;
    
}


const areaCirculo = calcularArea({ tipo: "circulo", radio: 8 });
console.log("Área del círculo:", areaCirculo);

const areaRectangulo = calcularArea({ tipo: "rectangulo", largo: 8, ancho: 2 });
console.log("Área del rectángulo:", areaRectangulo);

