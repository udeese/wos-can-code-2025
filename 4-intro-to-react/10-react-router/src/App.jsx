import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Top50Albums from './components/Top50Albums';
import AlbumDetails from './components/AlbumDetails';
import AlbumList from './components/AlbumList';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums" element={<Top50Albums />}>
          <Route index element={<AlbumList />} />
          <Route path=":albumId" element={<AlbumDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="py-3 bg-body-tertiary">
        <div className="container">Footer</div>
      </footer>
    </div>
  );
}

export default App;
