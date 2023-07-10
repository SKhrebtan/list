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
    })

select.addEventListener('change', onSelectChange);

function onSelectChange(e) {
    console.log(select.value);
fetch(`${select.value}`).then(response => {return response.json()}).then(t => {return t.sprites.front_default}).then(onPhoto)
}


function onPhoto(photo) {
    const markup = `<img src="${photo}" alt="pokemon">`;
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