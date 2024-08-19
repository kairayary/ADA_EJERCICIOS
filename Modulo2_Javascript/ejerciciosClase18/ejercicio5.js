/**A partir del siguiente array de frases, escribe la función “procesarFrases”
que realice las siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método
“.toLowerCase()” para este punto.
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String/toLower
Case
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena
separada por espacios.
5. Devuelva un nuevo array con las frases modificadas. */

let frases = [
    'El clima es MALO hoy',
    'Este libro es muy MALO',
    'El servicio aqui es MALO'
]

function procesarFrases(frases) {

    let fraseMinuscula = [];

    for (let i = 0; i < frases.length; i++) {

       fraseMinuscula.push(frases[i].toLowerCase());
    }
  
    //Divide cada frase 

    let frasesDividida = [];
    

    for (let i = 0; i < frases.length; i++) {
        
        let dividePalabras = frases[i].split(' ');
        
        frasesDividida.push(dividePalabras);
    }

    //Reemplace las palabras "malo" por "bueno".

  let reemplazaPalabras = frases.map(frase => frase.replace(/Malo/gi, 'bueno'));

   //Combine las palabras de cada frase en una nueva cadena
  //separada por espacios
  
    let todasLasPalabras = [];

    // Iterar a través de cada frase
    for (let i = 0; i < frases.length; i++) {
        // Dividir cada frase en palabras y agregar las palabras al array todasLasPalabras
        let palabras = frases[i].split(' ');
        todasLasPalabras.push(...palabras);
    }

    // Unir todas las palabras en una sola cadena separada por espacios
    let cadenaCombinada = todasLasPalabras.join(' ');
   
    return {
        fraseMinuscula,
        frasesDividida,
        reemplazaPalabras, 
        cadenaCombinada
    }


}
console.log(procesarFrases(frases));
