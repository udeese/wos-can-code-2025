import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import styles from './styles/style.module.css';
import './style.css';

function App() {
  return (
    <div className={styles['container-ciso']}>
      <Header />
      <div className="box d-flex justify-content-between align-items-start">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
