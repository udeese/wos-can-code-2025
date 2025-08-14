function CharacterCard({ char }) {
  return (
    <div className="card shadow">
      <img src={char.image} alt={char.name} />
      <div className="card-body">
        <h2 className="card-title">{char.name}</h2>
      </div>
      <div className="card-footer">
        <p className="mb-0">
          <strong>Status: </strong>
          {char.status}
        </p>
        <p className="mb-0">
          <strong>Species: </strong>
          {char.species}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
