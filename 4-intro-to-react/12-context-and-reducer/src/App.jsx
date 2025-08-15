import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1 container">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
