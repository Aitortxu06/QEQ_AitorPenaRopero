// Este es el array con los datos de los personajes

const personajes = [

    { nombre: "Ashitaka", pelicula: "La princesa Mononoke", imagen: "imagenes/Ashitaka.png" },
    { nombre: "Calcifer", pelicula: "El castillo ambulante", imagen: "imagenes/Calcifer.png" },
    { nombre: "Chihiro", pelicula: "El viaje de Chihiro", imagen: "imagenes/Chihiro.png" },
    { nombre: "Haku", pelicula: "El viaje de Chihiro", imagen: "imagenes/Haku.png" },
    { nombre: "Howl", pelicula: "El castillo ambulante", imagen: "imagenes/Hawl.png" },
    { nombre: "Jiji", pelicula: "Kiki: Entregas a domicilio", imagen: "imagenes/Jiji.png" },
    { nombre: "Mei", pelicula: "Mi vecino Totoro", imagen: "imagenes/Mei.png" },
    { nombre: "Nausicaä", pelicula: "Nausicaä del Valle del Viento", imagen: "imagenes/Nausica.png" },
    { nombre: "Pazu", pelicula: "El castillo en el cielo", imagen: "imagenes/Pazu.png" },
    { nombre: "Ponyo", pelicula: "Ponyo en el acantilado", imagen: "imagenes/Ponyo.png" },
    { nombre: "Porco Rosso", pelicula: "Porco Rosso", imagen: "imagenes/Porco.png" },
    { nombre: "San", pelicula: "La princesa Mononoke", imagen: "imagenes/San.png" },
    { nombre: "Satsuki", pelicula: "Mi vecino Totoro", imagen: "imagenes/Satsuki.png" },
    { nombre: "Sophie", pelicula: "El castillo ambulante", imagen: "imagenes/Sophie.png" },
    { nombre: "Sosuke", pelicula: "Ponyo en el acantilado", imagen: "imagenes/Sosuke.png" },
    { nombre: "Totoro", pelicula: "Mi vecino Totoro", imagen: "imagenes/Totoro.png" }
];

// Esta va a ser la variable que utilizemos para guardar el personaje que hay que adivinar

let personajeSecreto = null;

