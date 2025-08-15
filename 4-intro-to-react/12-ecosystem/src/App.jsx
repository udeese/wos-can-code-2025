import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodoApp from './components/TodoApp';

const qc = new QueryClient();

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <QueryClientProvider client={qc}>
        <main className="container flex-grow-1">
          <TodoApp />
        </main>
      </QueryClientProvider>
      <Footer />
    </div>
  );
}

export default App;
