import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/tmdb-api';
import MovieList from '../../components/MovieList/MovieList';
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
    
    fetchMoviesByQuery(query)
      .then(setMovies)
      .catch(console.error);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = e.target.elements.search.value.trim();
    if (newQuery === '') return;
    setSearchParams({ query: newQuery });
  };


    return (
        <div className={styles.div}>
            <h1>Search Movies</h1> 
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="search" defaultValue={query} className={styles.input} />
                <button type="submit" className={styles.button}>Search</button>
            </form>
            <MovieList movies={movies} />
        </div>
    )
}

export default MoviesPage;