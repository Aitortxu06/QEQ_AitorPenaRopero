
/*Lo primero que vamos a realizar es una funcion pintar tablero 
para que baraje las cartas automaticamente y luego las muestre en pantalla 
*/

function pintarTablero() {
    const contenedor = document.getElementById("tablero");

    // Si no existe el tablero
    if (!contenedor) return;

    contenedor.innerHTML = ""; //Limpia el tablero

    //1.Barajar el array de personajes aleatoriamente
    //Usamos el algoritmo .sort() con el Math.random para desordenar los personajes
    personajes.sort(() => Math.random() - 0.5);

    //2.Recorremos el array y creamos las tarjetas (Imagenes).
    personajes.forEach(personaje => {
        // Aqui creamos el div de la carta
        const carta = document.createElement("div");
        carta.className = "carta-personaje";

        //Creamos la imagen
        const img = document.createElement("img");
        img.src = personaje.imagen; //Esta es la ruta donde esta la imagen
        img.alt = personaje.nombre; //Aqui aparecera el nombre de la imagen

        img.dataset.original = personaje.imagen; //Guadamos la ruta original de la imagen para poder restaurarla
        
        //--- LÓGICA DE MIYAZAKI ---
        // cuando clicamos en la imagen, automaticamente la imagen se cambia 
        img.addEventListener("click", ()=> {
            //Cuando la imagen actual es la de miyazaki
            if(img.src.includes("miyazaki.jpeg")) {
                // volvemos a poner la original
                img.src = img.dataset.original;
            } else{
                //Si no, ponemos la de Miyazaki de nuevo.
                img.src = "imagenes/miyazaki.jpeg";
            }
        });

        //Creamos el nombre y la pelicula
        const info = document.createElement("div");
        info.innerHTML = `<strong>${personaje.nombre}</strong><br><small>${personaje.pelicula}</small>`;

        //Añadimos los elementos a la carta y la carta al tablero
        carta.appendChild(img); //Esto pega la foto en la carta
        carta.appendChild(info);//Esto pega el texto (nombre del personaje) debajo de la carta 
        contenedor.appendChild(carta);// Esto pega la tarjeta completa en el tablero (img + info).
        
    });
}

pintarTablero();