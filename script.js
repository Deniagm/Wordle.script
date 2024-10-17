const intentos = 5
let palabra = "clave"

window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

const button = document.getElementById("Enter-button");
function intentar(){
    console.log("Intento!")
}
addEventListener("click", intentar);

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}






