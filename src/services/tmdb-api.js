// import axios from 'axios';

// const API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN; // Беремо токен з .env
// const BASE_URL = 'https://api.themoviedb.org/3';

// Функція для отримання трендових фільмів
// const fetchTrendingMovies = async () => {
//     const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
//         headers: {
//             Authorization: `Bearer ${API_TOKEN}`
//         }
//     });
//     return response.data.results;
// };

// // Функція для пошуку фільмів за запитом
// const fetchMoviesByQuery = async (query) => {
//     const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, {
//         headers: {
//             Authorization: `Bearer ${API_TOKEN}`
//         }
//     });
//     return response.data.results;
// };

// // Функція для отримання деталей фільму
// const fetchMoviesDetails = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
//         headers: {
//             Authorization: `Bearer ${API_TOKEN}`
//         }
//     });
//     return response.data;
// };

// // Функція для отримання акторського складу фільму
// const fetchMovieCast = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
//         headers: {
//             Authorization: `Bearer ${API_TOKEN}`
//         }
//     });
//     return response.data.cast;
// };

// // Функція для отримання рецензій на фільм
// const fetchMovieReviews = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
//         headers: {
//             Authorization: `Bearer ${API_TOKEN}`
//         }
//     });
//     return response.data.results;
// };

// export { fetchTrendingMovies, fetchMoviesByQuery, fetchMoviesDetails, fetchMovieCast, fetchMovieReviews };


import axios from 'axios';

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjBlZDA0YWYyODk1YjY3YTgzMjJkYjdjYzA2NGJmZSIsIm5iZiI6MTczODk2NzgzMS40ODgsInN1YiI6IjY3YTY4YjE3MzEwMDFiZWMxM2M4OTdhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z2KXNj2uhS5wi8c9koY45XvlU0SomEvveiGRezURTUw";
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMoviesByQuery = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?query=${query}`, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error.response?.data || error.message);
        return [];
    }
};

const fetchTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    });
    return response.data.results;
};

const fetchMovieReviews = async (movieId) => {
     const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
         headers: {
             Authorization: `Bearer ${API_TOKEN}`
         }
     });
    return response.data.results;
};

const fetchMoviesDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    });
    return response.data;
};

const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    });
    return response.data.cast;
};

export { fetchMoviesByQuery, fetchTrendingMovies, fetchMovieReviews, fetchMoviesDetails, fetchMovieCast };