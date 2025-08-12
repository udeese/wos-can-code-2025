import { useState } from 'react';

const blankMovie = { title: '', year: '' };
const blankErrors = { title: '', year: '' };

function MovieForm({ onAddMovie }) {
  const [movie, setMovie] = useState(blankMovie);
  const [errors, setErrors] = useState(blankErrors);

  const isFormValid = errors.title === '' && errors.year === '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateFields(name, value);
  };

  const validateFields = (name, value) => {
    let message = '';
    switch (name) {
      case 'title':
        if (value.trim().length === 0) {
          message = 'Title is required.';
        }
        if (value.trim().length < 2) {
          message = 'Title must be at least 2 characters.';
        }
        break;
      case 'year':
        if (value.trim().length === 0) {
          message = 'Year is required.';
        }
        if (isNaN(value) || value < 1888 || value > 2030) {
          message = 'Invalid year.';
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.entries(movie).forEach(([name, value]) => {
      validateFields(name, value);
    });

    if (!errors.title && !errors.year) {
      const newMovie = { ...movie, id: crypto.randomUUID(), isWatched: false };
      onAddMovie(newMovie);

      setMovie(blankMovie);
      setErrors(blankErrors);
      console.log(movie);
    }
  };

  return (
    <div className="card shadow mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between align-items-start gap-2">
            <div className="flex-grow-1">
              <label htmlFor="title" className="visually-hidden">
                Title
              </label>
              <input
                value={movie.title}
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Title:"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.title && (
                <span className="form-text text-warning">{errors.title}</span>
              )}
            </div>
            <div className="flex-grow-1">
              <label htmlFor="year" className="visually-hidden">
                Year
              </label>
              <input
                value={movie.year}
                type="number"
                name="year"
                id="year"
                className="form-control"
                placeholder="Year:"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.year && (
                <span className="form-text text-warning">{errors.year}</span>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary text-nowrap"
              disabled={!isFormValid}>
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MovieForm;
