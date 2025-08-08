function TvShowItem({ tvShow }) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">{tvShow.title}</h5>
        <h6 className="card-subtitle">{tvShow.rating}</h6>
        <p className="card-text">{tvShow.description}</p>
      </div>
    </div>
  );
}

export default TvShowItem;
