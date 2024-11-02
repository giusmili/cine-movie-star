export async function fetchTop10Movies() {
    try {
        const response = await fetch("data/cine.json"); // Chemin vers le fichier JSON local
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des films");
        }
        const data = await response.json();
        if (data && data.top10_movies) {
            return data.top10_movies;
        } else {
            throw new Error("Aucun film trouvé");
        }
    } catch (error) {
        console.error("Erreur:", error);
        throw error;
    }
}

// Afficher les films dans la page
export const displayMovies = (movies)=> {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; // Vider la liste avant d'ajouter de nouveaux films

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.cover_image}" alt="Cover image for ${movie.title}" class="cover-image">
            <h2>${movie.rank}. ${movie.title}</h2>
            <p><strong>Réalisateur :</strong> ${movie.director}</p>
            <p><strong>Année :</strong> ${movie.year}</p>
            <p><strong>Genres :</strong> ${
                movie.genre.map(genre => `<span class="genre">${genre}</span>`).join(" ")
            }</p>
        `;

        movieList.appendChild(movieCard);
    });
}
