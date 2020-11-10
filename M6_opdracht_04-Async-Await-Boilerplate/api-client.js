const API_KEY = "***";
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