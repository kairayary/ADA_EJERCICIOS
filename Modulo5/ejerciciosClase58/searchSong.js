// 1. Crea un archivo searchSong.js.
// 2. Escribe una función que reciba el título de una canción y realice una
// solicitud a la API de iTunes para buscar la canción.
// 3. Muestra en la consola el nombre de la canción y el artista.

// Pistas:
// • La URL de búsqueda es
// https://itunes.apple.com/search?term={song_title}&limit=1.
// • La información de la canción se encuentra en el primer resultado del
// arreglo de resultados. 
const https = require('https');

function searchSong(title) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(title)}&limit=1`;

    https.get(url, (response) => {
        let data = '';

        // Capturar datos en fragmentos
        response.on('data', (chunk) => {
            data += chunk;
        });

        // Procesar los datos una vez completa la respuesta
        response.on('end', () => {
            try {
                const titles = JSON.parse(data);

                if (titles.results.length > 0) {
                    // Tomar el primer resultado
                    const song = titles.results[0]; 
                    console.log(`Canción: ${song.trackName}`);
                    console.log(`Artista: ${song.artistName}`);
                } else {
                    console.log('No se encontró resultado de la canción solicitada.');
                }
            } catch (error) {
                console.error('Error al procesar la respuesta:', error.message);
            }
        });
    }).on('error', (err) => {
        console.error('Error al realizar la solicitud:', err.message);
    });
}

// Llamada a la función con un título de canción
searchSong('Dile al amor');
