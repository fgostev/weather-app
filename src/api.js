import {displayInfo} from './dom.js';


function getUserInput(){
    const searchBar = document.getElementById('searchBar');
    const userInput = document.getElementById('cityName');
    searchBar.addEventListener('submit', function(event){
        event.preventDefault();
        const city = userInput.value;
        getWeather(city);
    })
}

async function getWeather(city) {
    const cityName = document.getElementById("city");
    const sky = document.getElementById("sky");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const windSpeed = document.getElementById("windSpeed");
    const humidity = document.getElementById("humidity");
    const pressure = document.getElementById("pressure");   

    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=32b67a112ef0565aff809db230fd4248`, {mode: 'cors'});
    response.json().then(function(response) 
    { 
    if(response.name)
    {   
       cityName.textContent = response.name;
       sky.textContent = "sky " + response.weather[0].main;
       temperature.textContent = "temperature " + response.main.temp;
       feelsLike.textContent = "feels like " + response.main.feels_like;
       windSpeed.textContent = "wind speed " + response.wind.speed;
       humidity.textContent = "humidity " + response.main.humidity;
       pressure.textContent = "pressure " + response.main.pressure;}
       else {
        alert("city not found");
       }
    })}
    catch(err){
        console.log("error")
    }
  }

function test2(){
    getUserInput();
}

export default test2;