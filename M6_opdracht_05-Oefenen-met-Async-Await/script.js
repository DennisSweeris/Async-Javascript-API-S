// Selectors
const movieGenresList = document.getElementById("movieGenresList");
const topMovie = document.getElementById("myTopMovie");
const topRatedList = document.getElementById("topRated");
const topInGenreList = document.getElementById("topInGenre");
const topRatedFromYearList = document.getElementById("topRatedFromYear");
const topRatedFromYearXList = document.getElementById("topRatedFromYearX");
const button = document.getElementById("topRatedFromYearXButton");
const input = document.getElementById("topRatedFromYearXInput");

// Event Listeners
button.addEventListener("click", () => {
    const year = input.value;
    setTopRatedMoviesForYearX(year);
});

const setMovieGenres = async () => {
    const data = await getMovieGenres();
    data.genres.forEach(movieGenre => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `Genre: ${movieGenre.name}, id: ${movieGenre.id}`
        );
        li.appendChild(liContent);
        movieGenresList.append(li);
    });
};

const setSingleMovie = async () => {
    const data = await getMovieById("tt0499549");
    const movie = data.movie_results[0];
    const li = document.createElement("li");
    const liContent = document.createTextNode(`${movie.title}`);
    li.appendChild(liContent);
    topMovie.append(li);
}

const setTopRatedMovies = async () => {
    const data = await getTopRatedMovies();
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${movie.title}, rating: ${movie.vote_average}`
        );
        li.appendChild(liContent);
        topRatedList.append(li);
    });
};

const setTopRatedMoviesInGenre = async genreId => {
    const data = await getTopRatedMoviesInGenreId(genreId);
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
        );
        li.appendChild(liContent);
        topInGenreList.append(li);
    });
};

const setTopRatedMoviesForYear = async () => {
    const data = await getTopRatedMoviesFromYear();
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
        );
        li.appendChild(liContent);
        topRatedFromYearList.append(li);
    });
};

const setTopRatedMoviesForYearX = async year => {
    document.getElementById("newYear").innerHTML = `Top Rated Movies from year ${year}`;
    topRatedFromYearXList.innerHTML = '';
    const data = await getTopRatedMoviesFromYearX(year);
    const topTen = data.results.splice(0, 10);
    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
        );
        li.appendChild(liContent);
        topRatedFromYearXList.append(li);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    setMovieGenres();
    setSingleMovie();
    setTopRatedMovies();
    setTopRatedMoviesInGenre();
    setTopRatedMoviesForYear();
});