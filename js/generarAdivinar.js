function seleccionarPersonajeSecreto() {
    // Comprobación de seguridad
    if (!personajes || personajes.length === 0) return;

    // 1. Obtenemos el objeto del personaje aleatorio directamente
    // (Math.random() nos da el número y lo usamos de índice del tirón)
    const aleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    
    // Usamos la variable global del archivo conseguirImagenes.js que es la del personajeSecreto
    personajeSecreto = aleatorio;

    // 2. Buscamos la caja
    const zonaImagen = document.getElementById("imagen-objetivo");
    
    if (zonaImagen) {
        // Inyectamos el HTML directamente usando comillas invertidas (``)
        // Basicamente esto nos borra la imagen anterior que teniamos y pone la nueva imagen en una sola linea.
        zonaImagen.innerHTML = `<img src="${aleatorio.imagen}" alt="Personaje Secreto">`;
        console.log("Objetivo:", personajeSecreto.nombre);
    }
}

seleccionarPersonajeSecreto();