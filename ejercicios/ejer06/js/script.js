"use strict";

// 1. Capturamos los elementos
const activar = document.getElementById("activar");
const desactivar = document.getElementById("desactivar");
const zona = document.getElementById("zona");
const resultado = document.getElementById("resultado");
// 2. Declaramos la función que queremos ejecutar al pasar el ratón
function cambiarFondo() {
    zona.style.backgroundColor = "lightblue";
    resultado.textContent = "Has pasado el ratón por encima del párrafo.";
}

// 3. Activar el evento (lo añadimos al párrafo con

activar.addEventListener("click", () => {
    zona.addEventListener("mouseover", cambiarFondo);
    resultado.innerHTML = "<p>🎯 Evento activado. Pasa el ratón por el párrafo.</p>";
});
// 4. Desactivar el evento (usamos removeEventListener)
desactivar.addEventListener("click", () => {
    zona.removeEventListener("mouseover", cambiarFondo);
    zona.style.backgroundColor = ""; // Quitamos el color
    resultado.innerHTML = "<p>🛑 Evento desactivado. Ya no se aplicará el color.</p>";
});
