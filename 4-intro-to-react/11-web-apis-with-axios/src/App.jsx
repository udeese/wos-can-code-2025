import Characters from './components/Characters';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 container">
        <Characters />
      </main>
      <Footer />
    </div>
  );
}

export default App;
