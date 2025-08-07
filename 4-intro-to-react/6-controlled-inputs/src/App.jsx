import LoginForm from './components/LoginForm';
import OneStateForm from './components/OneStateForm';

function App() {
  return (
    <div className="container mt-3">
      <div className="card shadow mb-3">
        <div className="card-body">
          <h5 className="card-title">Login Form</h5>
          <LoginForm />
        </div>
      </div>
      <div className="card shadow mb-3">
        <div className="card-body">
          <h5 className="card-title">One State Form</h5>
          <OneStateForm />
        </div>
      </div>
    </div>
  );
}

export default App;
