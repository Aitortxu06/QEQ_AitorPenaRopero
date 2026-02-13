// 1. Cogemos el botón del HTML de nuestro index.html 
const botonReset = document.getElementById("btn-reset");

// 2. Le añadimos el evento "click"
botonReset.addEventListener("click", () => {
    
    // 3. Mostramos una ventana de confirmación (que devuelve un boolean true o false)
    const respuesta = confirm("¿Estás seguro de que quieres reiniciar el juego?");

    // 4. Si el usuario dice "True" 
    if (respuesta === true) {
        
        /* Llamamos a la función de generarAdivinar.js para cambiar la imagen y 
        se reiniciaria el juego con otro personaje distinto */
        seleccionarPersonajeSecreto();

        // Llamamos a la función de generarImagenes.js para re-barajar y pintar
        pintarTablero();
    }
});