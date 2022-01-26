
function createSearchBar(){
    const searchBar = document.createElement('form');
    searchBar.id = 'searchBar';
    const cityName = document.createElement('input');
    cityName.type = 'search';
    cityName.id = 'cityName';
    cityName.name = 'cityName';
    cityName.required  = true;

    const submit = document.createElement('input');
    submit.type = 'text';
    submit.type = 'submit';
    submit.value = 'search';
    submit.id = 'submit';

    searchBar.append(cityName, submit);


    return searchBar;
}

function displayInfo(){
    const infoContainer = document.createElement('div');
    infoContainer.id = "infoContainer";
    
    const sky = document.createElement('p');
    sky.id = "sky";

    const cityName = document.createElement("h1");
    cityName.id = "city";

    const temperature = document.createElement("h2");
    temperature.id = "temperature";
    
    const feelsLike = document.createElement("p");
    feelsLike.id = "feelsLike";

    const windSpeed = document.createElement("p");
    windSpeed.id = "windSpeed";

    const humidity = document.createElement("p");
    humidity.id = "humidity";

    const pressure = document.createElement("p");
    pressure.id = "pressure";

    infoContainer.append(sky, cityName, temperature, feelsLike, windSpeed, humidity, pressure);

    return infoContainer;

}

function page(){
    const mainPage = document.getElementById('content');
    const searchBar = createSearchBar();
    const infoContainer = displayInfo();
    mainPage.append(searchBar, infoContainer);
}

export default page;