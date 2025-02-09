import { useEffect, useState, useRef } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { fetchMoviesDetails } from '../../services/tmdb-api';
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    fetchMoviesDetails(movieId)
      .then(setMovie)
      .catch(console.error);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

    return (
        <div className={styles.div}>
            <Link to={backLink} className={styles.backlink}>Go back</Link>
            <h1 className={styles.title}>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.img} />
            <p className={styles.p}>{movie.overview}</p>
            <nav className={styles.nav}>
                <Link to="cast" className={styles.cast}>Cast</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default MovieDetailsPage;