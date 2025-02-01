import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "./localStorage.js";

const enterBtn = document.getElementById('enterBtn');
const randomBtn = document.getElementById('randomBtn');

const FetchData = async () => {
    const starWarsID = document.getElementById('starWarsID').value;
    const newID = parseInt(starWarsID);
    const promise = await fetch(`https://www.swapi.tech/api/people/${newID}`); // max is 83
    const data = await promise.json();
    console.log(data);
    return data;
}

const GenerateRandom = async () => {
    const randomCharacter = Math.floor(Math.random() * 83) + 1;
    const promise = await fetch(`https://www.swapi.tech/api/people/${randomCharacter}`); 
    const data = await promise.json();
    console.log(data);
    return data;
}

enterBtn.addEventListener('click', () => {
    FetchData();
})

randomBtn.addEventListener('click', () => {
    GenerateRandom();
})