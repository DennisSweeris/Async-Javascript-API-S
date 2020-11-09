const setMovieGenres = async () => {
    const data = await getMovieGenres();
    const movieGenresList = document.getElementById("movieGenresList");
    data.genres.forEach(movieGenre => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `Genre: ${movieGenre.name}, id: ${movieGenre.id}`
        );
        li.appendChild(liContent);
        movieGenresList.append(li);
    });
    console.log("Data", data);
};

setMovieGenres();
