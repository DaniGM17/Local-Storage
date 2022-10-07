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
    

    //textarea
    const tweet = document.querySelector('#tweet').value;
    //validacion
    if(tweet === ''){
        mostrarError('No puede ir vacío');
        return;//evita que se ejecuten mas lineas
    }

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