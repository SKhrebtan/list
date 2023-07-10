import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
 

const select = document.querySelector('.select-pokemon')
const pokemonPhoto = document.querySelector('.pokemon');


fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(response => { return response.json() })
    .then(response => {
        console.log(response.results)
        const markup = response.results.map((t) => {
            return `<option value="${t.url}">${t.name}</option>`;
        }).join('');
        select.innerHTML = markup;
        new SlimSelect({
    select: '.select-pokemon',
    settings: {
    disabled: false,
    alwaysOpen: false,
    showSearch: true,
    searchPlaceholder: 'Search',
    searchText: 'No Results',
    searchingText: 'Searching...',
    searchHighlight: false,
    closeOnSelect: true,
    contentLocation: document.body,
    contentPosition: 'absolute',
    openPosition: 'auto', // options: auto, up, down
    placeholderText: 'Select Value',
    allowDeselect: false,
    hideSelected: false,
    showOptionTooltips: false,
    minSelected: 0,
    maxSelected: 1000,
    timeoutDelay: 200,
    maxValuesShown: 20,
    maxValuesMessage: '{number} selected',
  },
});
       
    })

select.addEventListener('change', onSelectChange);

function onSelectChange(e) {
    console.log(select.value);
fetch(`${select.value}`).then(response => {return response.json()}).then(t => {return t.sprites.front_default}).then(onPhoto)
}


function onPhoto(photo) {
    const markup = `<img src="${photo}" alt="pokemon" width="300px">`;
    pokemonPhoto.innerHTML = markup;    
}


// const pokemon = document.querySelector('.pokemon');

// fetchPokemon(49).
// then(renderPokemon);

// function fetchPokemon(id) {
//      return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(response =>  { return response.json() })
//    }

// function renderPokemon(t) {
//     const markup = `<h2>${t.name}</h2><img src="${t.sprites.front_default}" alt="${t.name}">`;
//     pokemon.innerHTML = markup;
// }