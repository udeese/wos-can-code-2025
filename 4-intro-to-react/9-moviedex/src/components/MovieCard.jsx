function MovieCard({ movie, onToggleWatched, onDelete }) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h2 className="card-title">
          {movie.title} ({movie.year})
        </h2>
        <p className="card-text">Watched? {movie.isWatched ? 'Yes' : 'No'}</p>
      </div>
      <div className="card-footer text-end">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => onToggleWatched(movie.id)}>
          {movie.isWatched ? (
            <i class="bi bi-eye-fill"></i>
          ) : (
            <i class="bi bi-eye"></i>
          )}
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm ms-2"
          onClick={() => onDelete(movie.id)}>
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
