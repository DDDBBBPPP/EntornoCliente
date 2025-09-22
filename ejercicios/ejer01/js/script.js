"use strict";

const boton= document.getElementById("boton");
const resultado= document.getElementById("resultado");

boton.onclick = mostrar;

function mostrar() {
    resultado.innerHTML = "¡Has pulsado el botón correctamente!";
}
