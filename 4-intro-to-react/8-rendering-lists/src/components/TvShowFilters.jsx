function TvShowFilters({
  showOnlyFavorites,
  handleToggleShowOnlyFavorites,
  handleChangeRatingsGroup,
}) {
  return (
    <div className="row mb-3">
      <div className="col">
        <select
          className="form-select form-select-sm"
          onChange={handleChangeRatingsGroup}>
          <option value="all">All Ratings</option>
          <option value="low">Rated 0 - 6</option>
          <option value="mid">Rated 6.1 - 8</option>
          <option value="high">Rated 8.1 - 10</option>
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
