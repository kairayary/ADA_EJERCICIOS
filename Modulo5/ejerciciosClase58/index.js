

//para obtenr y mostrar el nombre del primer personaje

const obtenerPrimerPersonaje = async ()=>{
    try {
        const url = 'https://rickandmortyapi.com/api/character';
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error(`Error al obtener datos: ${respuesta.status} ${respuesta.statusText}`);
        };

        const data = await respuesta.json();

        //Para acceder al nombre del primer personaje
        const nombrePrimerPersonaje = data.results[0].name;
        console.log(`El nombre del primer personaje es: ${nombrePrimerPersonaje}`);
        
    } catch (error) {
        console.error(`Ocurrió un error: ${error.message}`);
    };
};

obtenerPrimerPersonaje();