import { useState } from 'react';
import PersonCircle from './PersonCircle';

function Card({ name }) {
  const [pokes, setPokes] = useState(0);
  const handlePoke = () => {
    setPokes((prevPokes) => prevPokes + 1);
  };

  return (
    <div className="card">
      <div className="card-header flex">
        <div className="avatar flex absolute">
          <PersonCircle size={80} />
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          consequuntur beatae modi dicta eveniet.
        </p>
      </div>
      <div className="card-footer">
        <p>
          pokes: <span>{pokes}</span>
        </p>
        <button className="btn" onClick={handlePoke}>
          poke
        </button>
      </div>
    </div>
  );
}
export default Card;
