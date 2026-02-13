document.addEventListener("DOMContentLoaded", () => {
    const username = "Aitortxu06"; 
    const footer = document.getElementById("github-info");

    async function cargarDatosGithub() {
        try {
            const respuesta = await fetch(`https://api.github.com/users/${username}`);
            if (!respuesta.ok) throw new Error("No se pudo obtener el perfil");

            const datos = await respuesta.json();

            // Insertamos el contenido en el footer
            footer.innerHTML = `
                <div class="github-card">
                    <a href="${datos.html_url}" target="_blank" title="Ver mi perfil de GitHub">
                        <img src="${datos.avatar_url}" alt="Avatar de ${datos.login}" class="github-avatar">
                    </a>
                    <div class="github-text">
                        <p><strong>Desarrollado por:</strong> ${datos.name || datos.login}</p>
                        <p>Repositorios públicos: ${datos.public_repos}</p>
                    </div>
                </div>
            `;
        } catch (error) {
            console.error("Error API GitHub:", error);
            footer.innerHTML = "<p>Error al cargar datos de autor.</p>";
        }
    }

    cargarDatosGithub();
});