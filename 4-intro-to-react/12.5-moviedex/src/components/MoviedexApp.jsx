import { Fragment, useContext } from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/MoviedexApp.module.css';
import MovieForm from './MovieForm';
import { MovieContext } from '../contexts/MovieProvider';

function MoviedexApp() {
  const {
    state: { movies },
  } = useContext(MovieContext);
  // const handleToggleWatched = (targetId) => {
  //   const toggledMovies = movies.map((movie) => {
  //     if (movie.id === targetId) {
  //       return { ...movie, isWatched: !movie.isWatched };
  //     }
  //     return movie;
  //   });

  //   setMovies(toggledMovies);
  // };

  // const handleDelete = (targetId) => {
  //   const filteredMovies = movies.filter((movie) => movie.id !== targetId);
  //   setMovies(filteredMovies);
  // };

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
