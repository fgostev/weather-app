

function getUserInput(){
    const searchBar = document.getElementById('searchBar');
    const userInput = document.getElementById('cityName');
    searchBar.addEventListener('submit', function(event){
        event.preventDefault();
        const city = userInput.value;
        getWeather(city);
    })
}

function displayLoader(){
    const infoContainer = document.getElementById('infoContainer');
    const loader = document.getElementById('loader');
    loader.style.display = "block";
    infoContainer.style.display = "none";
}

function hideLoader(){
    const loader = document.getElementById('loader');
    loader.style.display = "none";
    infoContainer.style.display = "flex";
}

async function getWeather(city) {
    const cityName = document.getElementById("city");
    const sky = document.getElementById("sky");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feelsLike");
    const windSpeed = document.getElementById("windSpeed");
    const humidity = document.getElementById("humidity");
    const pressure = document.getElementById("pressure");   
    displayLoader();

    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=32b67a112ef0565aff809db230fd4248`, {mode: 'cors'});
    response.json().then(function(response) 
    { 
    if(response.name)
    {   
        hideLoader();
       cityName.textContent = response.name;
       sky.textContent = response.weather[0].main;
       temperature.textContent = response.main.temp + '°C';
       feelsLike.textContent = "feels like: " + response.main.feels_like + "°C";
       windSpeed.textContent = "wind speed: " + response.wind.speed;
       humidity.textContent = "humidity: " + response.main.humidity + "%";
       pressure.textContent = "pressure: " + response.main.pressure;}
       else {
        alert("city not found");
       }
    })}
    catch(err){
        console.log("error")
    }
  }

function weather(){
    getWeather("Moscow");
    getUserInput();
}

export default weather;