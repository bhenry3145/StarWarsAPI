import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "./localStorage.js";

const enterBtn = document.getElementById('enterBtn');
const randomBtn = document.getElementById('randomBtn');
const lukeBtn = document.getElementById('lukeBtn');
const c3poBtn = document.getElementById('c3poBtn');
const lobotBtn = document.getElementById('lobotBtn');
const namesList = document.getElementById('namesList');
const name = document.getElementById('name');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const gender = document.getElementById('gender');
const skinColor = document.getElementById('skinColor');
const hairColor = document.getElementById('hairColor');
const home = document.getElementById('home');

const FetchData = async () => {
    const starWarsID = document.getElementById('starWarsID').value;
    const newID = parseInt(starWarsID);
    const promise = await fetch(`https://www.swapi.tech/api/people/${newID}`); // max is 83
    const data = await promise.json();
    console.log(data);
    
}

const GetLuke = async () => {
    const promise = await fetch('https://www.swapi.tech/api/people/1');
    const data = await promise.json();
    characterName.innerText = data.result.properties.name;
}

const GetC3PO = async () => {
    const promise = await fetch('https://www.swapi.tech/api/people/2');
    const data = await promise.json();
    characterName.innerText = data.result.properties.name;
}

const GetLobot = async () => {
    const promise = await fetch('https://www.swapi.tech/api/people/26');
    const data = await promise.json();
    characterName.innerText = data.result.properties.name;
}

const GetAllPeople = async () => {
    const promise = await fetch('https://www.swapi.tech/api/people?page=1&limit=82')
    const data = await promise.json();
    console.log(data);
    const peopleArray = [];
    for (let i = 0; i < data.results.length; i++)
    {
        peopleArray.push(data.results[i].name);
    }
    
}

const GenerateRandom = async () => {
    const randomCharacter = Math.floor(Math.random() * 83) + 1;
    const promise = await fetch(`https://www.swapi.tech/api/people/${randomCharacter}`); 
    const data = await promise.json();
    console.log(data);
    
}

enterBtn.addEventListener('click', () => {
    FetchData();
})

randomBtn.addEventListener('click', () => {
    GenerateRandom();
})

lukeBtn.addEventListener('click', () => {
    GetLuke();
})

c3poBtn.addEventListener('click', () => {
    GetC3PO();
})

lobotBtn.addEventListener('click', () => {
    GetLobot();
})