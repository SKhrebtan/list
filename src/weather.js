import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

const weatherBlock = document.querySelector('.weather-section');
const weatherInput = document.querySelector('.weather-input');

weatherInput.addEventListener('input', debounce(onInputType, 3000));
let city = 'kiev';

function onInputType(e) {
    console.log(weatherInput.value);
    city = weatherInput.value;
    fetchByName(city)
    .then(onWeatherRender);
};

function fetchByName(city) {
        return fetch(`http://api.weatherstack.com/current?access_key=6c248080c44a632b775f09a3c36d8942&query=${city}`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                return response.json()
            })
    .catch(error => {console.log(error)})
}
    
function onWeatherRender(city) {
    console.log(city);
        const markup = `
        <ul class="weather-list">
        <li class="weather-list-item"><span class="weather-list">Temperature: </span>${city.current.temperature}</li>
        <li class="weather-list-item"><span class="weather-list">Feels like: </span>${city.current.feelslike}</li>
        <li class="weather-list-item"><span class="weather-list">Lon: </span>${city.location.lon}</li>
        <li class="weather-list-item"><span class="weather-list">Lat: </span>${city.location.lat}</li>
        </ul>`;
        weatherBlock.innerHTML = markup;
};