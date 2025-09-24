"use strict";

const btnSelector = document.getElementById("btnSelector");
const btnSelectorAll = document.getElementById("btnSelectorAll");
const resultado = document.getElementById("resultado");

btnSelector.addEventListener("click",() =>{
    const primerParrafo = document.querySelector(".parrafo");
    console.log(primerParrafo); //Devuelve un NodeList. En el NodeList Sí SE PUEDE HACER UN FOREACH.
    //resultado.innerHTML = "<p>querySelector() encontró <b>"+ primerParrafo.textContent + "</b></p>"
    // Para concatenar, el de arriba o lo de abajo
    resultado.innerHTML = `<p>querySelector() encontró: <b>${primerParrafo.textContent}</b></p>`;
});

btnSelectorAll.addEventListener("click",() =>{
    resultado.innerHTML = "";
    const allParrafos = document.querySelectorAll(".parrafo");
    console.log(allParrafos);
    let salida = `<p>querySelectorAll() encontró: </p><ul>`;
    allParrafos.forEach((p) => {
        salida += `<li><b>${p.textContent}</b></li>`;
    });
salida += "</ul>";

    resultado.innerHTML = salida;
});
