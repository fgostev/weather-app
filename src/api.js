// function test(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=queretaro&APPID=32b67a112ef0565aff809db230fd4248', {mode: 'cors'})
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(response) {
//       console.log(response);
//     });
// }

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=32b67a112ef0565aff809db230fd4248`, {mode: 'cors'});
    response.json().then(function(response) {
       console.log(response.weather);
    });
  }

function test2(){
    let city = prompt("city?");
    getWeather(city);
}

export default test2;