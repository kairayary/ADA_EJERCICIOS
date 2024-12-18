//1. Crea un archivo getWeather.js.
// 2. Escribe una función que reciba el nombre de una ciudad y realice una
// solicitud a la API de OpenWeatherMap para obtener el clima actual de esa
// ciudad (requiere clave de API gratuita).
// 3. Extrae y muestra en la consola la temperatura y la descripción del clima.

// Pistas:

// • Usa fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
// ciudad + "&appid=TU_API_KEY").
// • La temperatura está en main.temp y la descripción en
// weather[0].description. 

//  const https = require('https');
//  const fetch = require('node-fetch');

async function getWeather(city) {
    
    const apiKey = '692fdc35dce9e3adcfb61026efa774c2';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error (`Error al obtener el clima: ${response.statusText}`)
        };

        const data = await response.json();
        
        // para extraer la temperatura y la descripción del clima
        const temperature = data.main.temp;
        const description = data.weather[0].descripción;

        console.log(`El clima en ${city} es:`);
        console.log(`Temperatura: ${temperature}°C`);
        console.log(`Descripción: ${description}`);
    } catch (error) {
        console.error(`Ocurrió un error: ${error}`) 
    };
};

getWeather("Caracas");