import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';

function UserCard() {
  const user = useContext(UserContext);

  return (
    <div className="card shadow">
      <div className="card-body">
        <div className="card-title">{user.username}</div>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          tenetur! Ut iure dolor est, sunt ea sint non laudantium obcaecati,
          vero minus incidunt officia quia.
        </p>
      </div>
    </div>
  );
}

export default UserCard;
