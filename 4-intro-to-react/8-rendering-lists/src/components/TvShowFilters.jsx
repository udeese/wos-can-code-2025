function TvShowFilters({ showOnlyFavorites, handleToggleShowOnlyFavorites }) {
  return (
    <div className="row mb-3">
      <div className="col">
        <select className="form-select form-select-sm">
          <option value="">Rated 0-6</option>
          <option value="">Rated 7-8</option>
          <option value="">Rated 9-10</option>
        </select>
      </div>
      <div className="col">
        <button
          type="button"
          className={`btn btn-sm ${
            showOnlyFavorites ? 'btn-outline-primary' : 'btn-outline-success'
          }`}
          onClick={handleToggleShowOnlyFavorites}>
          {showOnlyFavorites ? 'Show All' : 'Show Favorites Only'}
        </button>
      </div>
    </div>
  );
}

export default TvShowFilters;
