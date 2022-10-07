//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];
//event listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}

//funciones
function agregarTweet(e){
    e.preventDefault();
    console.log('Agregando Tweet');
}