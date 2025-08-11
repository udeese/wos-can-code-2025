function MovieCard({ movie }) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">
          {movie.title} ({movie.year})
        </h2>
        <p className="card-text">Watched? {movie.isWatched ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default MovieCard;
