import { Fragment, useState } from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/MoviedexApp.module.css';
import MovieForm from './MovieForm';

function MoviedexApp() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (newMovie) => {
    setMovies((prev) => [newMovie, ...prev]);
  };

  const handleToggleWatched = (targetId) => {
    const toggledMovies = movies.map((movie) => {
      if (movie.id === targetId) {
        return { ...movie, isWatched: !movie.isWatched };
      }
      return movie;
    });

    setMovies(toggledMovies);
  };

  const handleDelete = (targetId) => {
    const filteredMovies = movies.filter((movie) => movie.id !== targetId);
    setMovies(filteredMovies);
  };

  return (
    <Fragment>
      <MovieForm onAddMovie={handleAddMovie} />
      {movies.length === 0 ? (
        <p>Your Moviedex is empty! Add a movie above.</p>
      ) : (
        <div className={styles['card-grid']}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={handleDelete}
              onToggleWatched={handleToggleWatched}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default MoviedexApp;
