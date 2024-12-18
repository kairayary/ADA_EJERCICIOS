// Descripción:
// 1. Crea un archivo getPokemon.js.
// 2. Usando fetch, realiza una solicitud a la API de PokeAPI para obtener
// información sobre el Pokémon "Bulbasaur".
// 3. Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la
// consola.
// Pistas:
// • La URL para Bulbasaur es https://pokeapi.co/api/v2/pokemon/1.
// • Los tipos de Pokémon se encuentran en types dentro de la respuesta

const extraerNombreTipo = async () => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon/1';
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error al obtener datos: ${respuesta.status} ${respuesta.statusText}`);
        }

        const data = await respuesta.json();

        const nombre = data.name;
        const tipos = data.types.map(tipo => tipo.type.name);

        console.log(`Nombre: ${nombre}`);
        console.log(`Tipos: ${tipos.join(', ')}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

extraerNombreTipo();
