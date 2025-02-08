import { useEffect, useState } from "react";
import { fetchTrendingMovies } from '../../services/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import styles from "./HomePage.module.css";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies).catch(console.error);
    }, []);

    return (
        <div className={styles.div}>
            <h1 className={styles.title}>Trending Movies</h1>
            <MovieList movies={movies} />
        </div>
    )
}
export default HomePage;