"use strict";

const btnLeer = document.getElementById("btnLeer");
const btnModificar = document.getElementById("btnModificar");
const caja = document.getElementById("caja");
const parrafo = caja.querySelector(".parrafo");// Se selecciona el parrafo dentro de la caja
const resultado = document.getElementById("resultado");

// Formas de leer el contenido de un elemento.
btnLeer.addEventListener("click", ()=>{
    const texto1 = parrafo.textContent; // obtenemos el contenido de las etiquetas, solo.
    const texto2 = parrafo.innerText;   //obtenemos el contenido que no esté oculto
    const texto3 = parrafo.innerHTML;   // Obtenemos el contenido que no esté oculto
                                        // Y no se aplica el formato HTML
    resultado.innerHTML = 
    `<p><b>textContent:</b> ${texto1}</p>
     <p><b>innerText:</b> ${texto2}</p>
     <p><b>innerHTML:</b> ${texto3}</p>`;
});

// Formas de modificar el contenido de un elemento.
btnModificar.addEventListener("click", () =>{
    parrafo.innerHTML = `Texto <mark>modificando</mark> usando <code>innerHTML</code>`;
    resultado.innerHTML = `<p>Contenido modificado correctamente.</p>`;

});