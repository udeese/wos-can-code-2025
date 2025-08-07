import { useState } from 'react';

function OneStateForm() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          value={formState.username}
          type="text"
          name="username"
          id="username"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          value={formState.email}
          type="text"
          name="email"
          id="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default OneStateForm;
