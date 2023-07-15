const dogsSelect = document.querySelector('.dogs');
const dogInfo = document.querySelector('.dog-info');

fetch('https://api.thedogapi.com/v1/breeds/?limit=100')
    .then(response => {
        if (response.status !== 200) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(dogs => {
        const markup = dogs.map(dog => {
                return `<option value="${dog.id}" name="${dog.name}">${dog.name}</option>`
        }).join('');
        dogsSelect.innerHTML = markup;
    })

dogsSelect.addEventListener('change', onDogSelect);

function onDogSelect(e) {
    console.log(dogsSelect.value)
    onDogImgFetch(dogsSelect.value)
        .then(renderPhotoDog);

};

function onDogImgFetch(id) {
        return fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}&api_key=live_2jIJfwcZBQTHZg4p85o314KTbd5zRvyg8dxZzmKirNbBbL8mHf7vy0nplnD7JLOE`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(response.status)
                };
                return response.json()
            } )
};

function renderPhotoDog(dog) {
const option = dogsSelect.querySelector(`option[value="${dogsSelect.value}"]`);
    const photo = dog[0].url;
    const name = option.getAttribute('name');
    const markup = `<h1>${name}</h1><img src="${photo}" alt="dog" width="480px">`;
    dogInfo.innerHTML = markup;
};