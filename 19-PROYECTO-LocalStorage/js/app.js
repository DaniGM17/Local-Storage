//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];
//event listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
    //cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });
}

//funciones
function agregarTweet(e){
    e.preventDefault();
    

    //textarea
    const tweet = document.querySelector('#tweet').value;
    //validacion
    if(tweet === ''){
        mostrarError('No puede ir vacío');
        return;//evita que se ejecuten mas lineas
    }
    const tweetObj = {
        id: Date.now(),
        tweet
    }

    tweets = [...tweets, tweetObj];
    // crear html
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
}

//mostrar error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //elimina el mensaje de error despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

//Muestra un listado de los tweets 
function crearHTML(){
    limpiarHTML();

    if(tweets.length > 0 ){
        tweets.forEach( tweet => {
            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}
//Agrega los tweets actuales a localstorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//limpiar html
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}