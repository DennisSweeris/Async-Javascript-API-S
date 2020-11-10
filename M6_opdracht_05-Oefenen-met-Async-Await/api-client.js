const API_KEY = "1ae1cac66575f1c6b2638aa1b08f59c9";
const base_endpoint = "https://api.themoviedb.org/3";

const getMovieGenres = async () => {
    const APIEndpoint = `${base_endpoint}/genre/movie/list?api_key=${API_KEY}`;
    try {
        const res = await fetch(APIEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getMovieById = async movieId => {
    const movieByIDEndpoint = `${base_endpoint}/find/${movieId}?api_key=${API_KEY}&external_source=imdb_id`;
    try {
        const res = await fetch(movieByIDEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedMovies = async () => {
    const topRatedMoviesEndpoint = `${base_endpoint}/movie/top_rated?api_key=${API_KEY}`;
    try {
        const res = await fetch(topRatedMoviesEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedMoviesInGenreId = async () => {
    const topRatedMoviesInGenreIdEndpoint = `${base_endpoint}/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&page=1&vote_count.gte=500&with_genres=28`;
    try {
        const res = await fetch(topRatedMoviesInGenreIdEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};
const getTopRatedMoviesFromYear = async year => {
    const topRatedMoviesFromYearEndpoint = `${base_endpoint}/discover/movie?api_key=${API_KEY}&primary_release_year=1975`;
    try {
        const res = await fetch(topRatedMoviesFromYearEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getTopRatedMoviesFromYearX = async year => {
    const topRatedMoviesFromYearXEndpoint = `${base_endpoint}/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
        const res = await fetch(topRatedMoviesFromYearXEndpoint, { method: "GET" });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};