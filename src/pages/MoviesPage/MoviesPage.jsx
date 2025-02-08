import { useState } from "react";
import { fetchMoviesByQuery } from '../../services/tmdb-api';
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css"

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        const results = await fetchMoviesByQuery(query);
        setMovies(results);
    }

    return (
        <div>
            <h1>Search Movies</h1> 
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className={styles.input} />
                <button type="submit" className={styles.button}>Search</button>
            </form>
            <MovieList movies={movies} />
        </div>
    )
}

export default MoviesPage;