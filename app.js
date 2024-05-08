const apiKey = '27fa145981481716b8f733b8d6739a7f';
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDataDiv = document.getElementById('weatherData');

getWeatherBtn.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { main, wind } = data;
            const temperature = `Temperature: ${main.temp - 273.15}°C`;
            const humidity = `Humidity: ${main.humidity}%`;
            const windSpeed = `Wind Speed: ${wind.speed} m/s`;

            weatherDataDiv.innerHTML = `
                <p>${temperature}</p>
                <p>${humidity}</p>
                <p>${windSpeed}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            weatherDataDiv.innerHTML = 'Error fetching weather data.';
        });
});