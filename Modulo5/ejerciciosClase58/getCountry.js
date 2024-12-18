
// 1. Crea un archivo getCountry.js.
// 2. Escribe una función que reciba el nombre de un país como parámetro,
// realice una solicitud a la API de REST Countries, y devuelva el nombre,
// capital y región del país.
// 3. Muestra estos datos en la consola.
// Pistas:

// • La URL para buscar un país es
// https://restcountries.com/v3.1/name/{name}.
// • La respuesta contiene un arreglo; accede al primer objeto con [0] para
// extraer la información. 

import * as https from 'https';
 async function getCountry(name) {
    const url = `https://restcountries.com/v3.1/name/${name}`;


    https.get(url, (res)=>{
        let data = '';
        //con esto se recopila información
        res.on('data',(chunk)=>{
            data += chunk
        });

        res.on('end',()=>{
            try {
                //para convertir la respuesta a json
                const countries= JSON.parse(data);
                //para acceder al primer país
                const country = countries[0];

                const{name:countryName, capital, region}= country;

                console.log(`Nombre: ${countryName.common}`);
                console.log(`Capital: ${capital ? capital[0] : 'No tiene'}`);
                console.log(`Región: ${region}`);
                
            } catch (error) {
                console.error('No se pudo procesar la respuesta. Verifica el nombre del país.');
            };
        })
    }).on('error', (err)=>{
        console.error('Error al realizar la solicitud:', err.message);
    });
};

getCountry('Venezuela');