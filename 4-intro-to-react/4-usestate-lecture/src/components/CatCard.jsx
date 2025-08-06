import { useState } from 'react';

function CatCard({ title, age, url }) {
  // age = age + 1; <-- this is a no-no
  const [ageState, setAgeState] = useState(age);

  const handleClick = () => {
    setAgeState((prev) => prev + 1);
  };

  return (
    <div className="card" style={{ width: 434 }}>
      <div className="card-body">
        <h2>{title}</h2>
        <p>{ageState}</p>
        <button onClick={handleClick}>birthday</button>
        <img src={url} alt="cat" />
      </div>
    </div>
  );
}

export default CatCard;
