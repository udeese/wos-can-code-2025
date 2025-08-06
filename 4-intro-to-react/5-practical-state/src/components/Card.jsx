function Card({ onToggleTheme }) {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Card Title</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sequi
          quibusdam debitis est vel in.
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onToggleTheme}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default Card;
