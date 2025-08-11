import { Fragment, useState } from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/MoviedexApp.module.css';
import MovieForm from './MovieForm';

function MoviedexApp() {
  const [movies, setMovies] = useState([]);

  return (
    <Fragment>
      <MovieForm />
      {movies.length === 0 ? (
        <p>Your Moviedex is empty! Add a movie above.</p>
      ) : (
        <div className={styles['card-grid']}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default MoviedexApp;
