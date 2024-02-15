const apikey="3265874a2c77ae4a04bb96236a642d2f";

const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');
const display = document.querySelector('.upper-container');
const infoDisplay = document.querySelector('.lower-container');

const url = (city) =>  
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherDataByLocation(city) {
    const resp = await fetch(url(city), {origin: "cors"});

    const respData = await resp.json();

    console.log(respData);
    console.log("hai");

    addWeatherToPage(respData);
}


function KtoC(temp) {
    console.log(temp - 273.15);
    return Math.floor(temp - 273.15); 
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.innerHTML = 
    `<h2>${data.name},${data.sys.country}</h2>
    <h2>${temp}°C <img src="https://openweathermap.org/img/w/${data.weather[0].icon}@2x.png" /></h2>`;

    display.appendChild(weather);

    const weatherInfo = document.createElement('div');
    weatherInfo.classList.add('weatherInfo');
    weatherInfo.innerHTML =
    `<p>Min_Temp ${KtoC(data.main.temp_min)}°C</p>
     <p>Max_Temp ${KtoC(data.main.temp_max)}°C</p>
     <p>Pressure ${data.main.pressure}</p>   
    `;

    infoDisplay.appendChild(weatherInfo);

    

}

 getWeatherDataByLocation("london");

form.addEventListener('click',(e) => {
    e.preventDefault();

    const city = search.value;

    if(city) {
        getWeatherDataByLocation(city);
    }
});