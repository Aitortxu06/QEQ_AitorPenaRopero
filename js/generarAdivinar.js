function seleccionarPersonajeSecreto() {

    // Comprobación de seguridad: Si no hay personajes, paramos para evitar errores.
    if (!personajes || personajes.length === 0) return;

    // 1. Obtenemos el objeto del personaje aleatorio directamente
    // // Math.random() nos da un número al azar y lo usamos como índice del array.
    const aleatorio = personajes[Math.floor(Math.random() * personajes.length)];
    
    // Usamos la variable global del archivo conseguirImagenes.js que es la del personajeSecreto
    personajeSecreto = aleatorio;

    // 2. Mostramos la imagen
    const zonaImagen = document.getElementById("imagen-objetivo");
    if (zonaImagen) {
        // Inyectamos el HTML directamente usando comillas invertidas (``)
        // Basicamente esto nos borra la imagen anterior que teniamos y pone la nueva imagen en una sola linea.
        zonaImagen.innerHTML = `<img src="${aleatorio.imagen}" alt="Personaje Secreto">`;
    }

    // 3. Mostramos el nombre
    const zonaNombre = document.getElementById("nombre-objetivo");
    if (zonaNombre) {
        zonaNombre.textContent = aleatorio.nombre;
        zonaNombre.style.display = "block"; 
    }

    // 4. Mostramos la película
    const zonaPelicula = document.getElementById("pelicula-objetivo");
    if (zonaPelicula) {
        zonaPelicula.textContent = aleatorio.pelicula;
    }

    console.log("El objetivo a encontrar es:", personajeSecreto.nombre);
}

seleccionarPersonajeSecreto();