// function test(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=queretaro&APPID=32b67a112ef0565aff809db230fd4248', {mode: 'cors'})
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(response) {
//       console.log(response);
//     });
// }


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
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=32b67a112ef0565aff809db230fd4248`, {mode: 'cors'});
    response.json().then(function(response) {
       console.log(response);
       console.log(response.name);
       console.log(response.weather);
       console.log(response.main);

    });
  }

function test2(){
    getUserInput();
}

export default test2;