
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

function page(){
    const mainPage = document.getElementById('content');
    const searchBar = createSearchBar();
    mainPage.append(searchBar);
}

export default page;