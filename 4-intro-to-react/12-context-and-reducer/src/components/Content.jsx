import { useEffect, useReducer, useRef } from 'react';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'CUSTOM':
      return { ...state, count: state.count + action.payload };
    default:
      console.log('Unexpected action type.');
      return state;
  }
};

function Content() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const customInputRef = useRef(null);

  return (
    <section>
      <h2 className="display-4">Content</h2>
      <p>
        <strong>Count: </strong>
        {state.count}
      </p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
      <button
        type="button"
        className="btn btn-primary ms-2"
        onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <div className="my-3 d-flex gap-2 align-items-center">
        <input
          ref={customInputRef}
          type="number"
          name="custom"
          id="custom"
          className="form-control"
        />
        <button
          type="button"
          className="btn btn-primary text-nowrap"
          onClick={() =>
            dispatch({ type: 'CUSTOM', payload: +customInputRef.current.value })
          }>
          Add Custom Value
        </button>
      </div>
    </section>
  );
}

export default Content;
