function TvShowItem({ tvShow, handleToggleIsFavorite, handleDeleteTvShow }) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">{tvShow.title}</h5>
        <h6 className="card-subtitle">{tvShow.rating}</h6>
        <p className="card-text">{tvShow.description}</p>
      </div>
      <div className="card-footer text-end">
        <button
          type="button"
          className="btn btn-sm btn-ghost me-2"
          onClick={() => handleToggleIsFavorite(tvShow.id)}>
          {tvShow.isFavorite ? '❤️' : '＋'}
        </button>
        <button
          type="button"
          className="btn btn-sm btn-ghost"
          onClick={() => handleDeleteTvShow(tvShow.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TvShowItem;
