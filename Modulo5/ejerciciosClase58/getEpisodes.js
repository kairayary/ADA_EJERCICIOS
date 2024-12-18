// 1. Crea un archivo getEpisodes.js.
// 2. Realiza una solicitud a la API de TVMaze para obtener la lista de episodios
// de una serie específica (puedes usar el nombre “Friends” como ejemplo).
// 3. Muestra en la consola los nombres de los episodios y sus números de
// temporada.
// Pistas:
// • La URL para obtener episodios es
// https://api.tvmaze.com/singlesearch/shows?q=nombre_de_la_serie&embe
// d=episodes.
// • Los episodios están dentro de _embedded.episodes. 

async function getEpisodes(name) {
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(name)}&embed=episodes`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error (`Error al obtener el usuario: ${response.status} ${response.statusText}`)
        };

        const data = await response.json();
        const episodes = data._embedded.episodes;
        
        //episodes es un arreglo y hay que iterar para poder
        //mostrar los nombres de los episodios y número de temporada
        episodes.forEach(episode => {
            console.log(`Temporada ${episode.season}, Episodio ${episode.number}: ${episode.name}`);
        });
        console.log(`Nombre: ${data._embedded.episodes.name}`);
    } catch (error) {
        console.error(`Ocurrió un error: ${error}`)
    };
};

getEpisodes('Friends')