import { useState } from 'react';

function ButtonCard() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="card">
      <button onClick={handleClick}>count is {count}</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
export default ButtonCard;
