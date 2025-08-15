import { createContext, useReducer } from 'react';

const MovieContext = createContext({
  state: { movies: [] },
  dispatch: () => {},
});

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return { ...state, movies: [action.payload, ...state.movies] };
    case 'TOGGLE_WATCHED':
      break;
    case 'DELETE_MOVIE':
      break;
    default:
      break;
  }
};

function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(movieReducer, { movies: [] });

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}

export { MovieContext };
export default MovieProvider;
