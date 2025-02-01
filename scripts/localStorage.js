function saveToLocalStorage(starWarsName){

    let nameArr = getFromLocalStorage();

    if (!nameArr.includes(starWarsName)){
        nameArr.push(starWarsName);
    }

    localStorage.setItem('Star Wars', JSON.stringify(nameArr));

}

function getFromLocalStorage(){
    let localStorageData = localStorage.getItem('Star Wars');

    if (localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

function removeFromLocalStorage(pokemonName){
    let localStorageData = getFromLocalStorage();

    let nameIndex = localStorageData.indexOf(pokemonName);

    localStorageData.splice(nameIndex, 1);

    localStorage.setItem('Star Wars', JSON.stringify(localStorageData));

}

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage }