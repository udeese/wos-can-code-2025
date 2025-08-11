import { useState } from 'react';

const blankMovie = { title: '', year: '' };
const errors = { title: '', year: '' };

function MovieForm() {
  const [movie, setMovie] = useState(blankMovie);

  return (
    <div className="card shadow mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div className="flex-grow-1">
            <label htmlFor="title" className="visually-hidden">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Title:"
            />
          </div>
          <div className="flex-grow-1">
            <label htmlFor="year" className="visually-hidden">
              Year
            </label>
            <input
              type="number"
              name="year"
              id="year"
              className="form-control"
              placeholder="Year:"
            />
          </div>
          <button type="submit" className="btn btn-primary text-nowrap">
            Add Movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieForm;
