const API_KEY = "99836538d815f43cd13af4410c28e10f"

// export default {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetcComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
//     fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//     fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//     fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
// }

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export default requests;