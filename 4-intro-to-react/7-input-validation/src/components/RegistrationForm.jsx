import { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsernameError('');

    let isValid = true;
    if (username.trim() === '') {
      setUsernameError('Username is required');
      isValid = false;
    } else if (username.trim().length < 3) {
      setUsernameError('Username must be at least three characters.');
      isValid = false;
    }

    if (isValid === false) {
      return;
    }

    setIsFormSubmitted(true);
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Register</h5>
        <h6 className="card-subtitle mb-3">
          {isFormSubmitted
            ? 'Thank you for registering'
            : 'Please fill out the form'}
        </h6>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              value={username}
              type="text"
              name="username"
              id="username"
              className="form-control"
              onChange={handleUsernameChange}
            />
            {usernameError && (
              <span className="form-text text-warning">{usernameError}</span>
            )}
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
