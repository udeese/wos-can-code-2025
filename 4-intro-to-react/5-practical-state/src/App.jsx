import { useState } from 'react';
import Navbar from './components/Navbar';
import OffCanvas from './components/OffCanvas';
import Card from './components/Card';

function App() {
  const [isShown, setIsShown] = useState(false);
  const [theme, setTheme] = useState('dark');
  // const [object, setObject] = useState({
  //   name: 'ciso',
  //   email: 'ciso@ciso.com',
  // });

  const handleToggleIsShown = () => {
    setIsShown((isShown) => !isShown);
  };

  const handleToggleTheme = () => {
    setTheme((theme) => {
      return theme === 'light' ? 'dark' : 'light';
      // if (theme === 'light') return 'dark';
      // else return 'light';
    });
  };

  return (
    <div data-bs-theme={theme}>
      <OffCanvas onToggleIsShown={handleToggleIsShown} isShown={isShown} />
      <Navbar onToggleIsShown={handleToggleIsShown} />
      <main className="container">
        <Card onToggleTheme={handleToggleTheme} />
      </main>
    </div>
  );
}

export default App;
