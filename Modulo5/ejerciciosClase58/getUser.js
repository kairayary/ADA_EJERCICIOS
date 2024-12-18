// 1. Crea un archivo getUser.js.
// 2. Usando fetch, realiza una solicitud a la API de JSONPlaceholder para
// obtener la información de un usuario específico.
// 3. Extrae y muestra en la consola el nombre, nombre de usuario y correo
// electrónico del usuario.

// Pistas:
// • La URL para buscar un usuario es
// https://jsonplaceholder.typicode.com/users/{id}. 


async function getUser(id) {

    const url = ` https://jsonplaceholder.typicode.com/users/${id}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error (`Error al obtener el usuario: ${response.status} ${response.statusText}`)
        };

        const data = await response.json();
        console.log(`Nombre: ${data.name}`);
        console.log(`Nombre de usuario: ${data.username}`);
        console.log(`Correo electrónico: ${data.email}`);
      
    } catch (error) {
        console.error(`Ocurrió un error: ${error}`)
    };
    
};

getUser(1)