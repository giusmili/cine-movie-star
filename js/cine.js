// Fonction pour récupérer les films depuis le fichier cine.json
import {fetchTop10Movies, displayMovies} from "./promise.js";

// Fonction principale pour récupérer et afficher les films
async function main() {
    try {
        const movies = await fetchTop10Movies();
        displayMovies(movies);
    } catch (error) {
        document.getElementById("movieList").innerHTML = `<p>Erreur : ${error.message}</p>`;
    }
}

// Appeler la fonction principale après le chargement de la page
document.addEventListener("DOMContentLoaded", main);
