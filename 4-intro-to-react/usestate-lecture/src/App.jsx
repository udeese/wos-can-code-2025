import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ButtonCard from './components/ButtonCard';
import CardGrid from './components/CardGrid';

function App() {
  const cats = [
    {
      title: 'Sir Pounce a lot',
      age: 3,
      url: 'https://placecats.com/400/300',
    },
    {
      title: 'Patches',
      age: 5,
      url: 'https://placecats.com/400/400',
    },
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ButtonCard />
      <CardGrid cats={cats} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
