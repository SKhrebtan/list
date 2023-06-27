const heroListRef = document.querySelector('.hero-list');
const inputRef = document.querySelector('.input');
const btnRef = document.querySelector('.button');

inputRef.addEventListener('keydown', onNewListItemAdd);
btnRef.addEventListener('click', onClickAdd);

function onNewListItemAdd(e) {
    if (e.code !== 'Enter') {
        return;
    }
    if (inputRef.value === '') {
        return;
    }

    const newListItem = document.createElement('li');
    newListItem.classList.add('li-item');
    newListItem.textContent = inputRef.value;
    inputRef.value = '';

    return heroListRef.appendChild(newListItem);
    
}

function onClickAdd(e) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('li-item');
    newListItem.textContent = inputRef.value;
    inputRef.value = '';
    return heroListRef.appendChild(newListItem);
}
