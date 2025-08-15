import { useUI } from '../store/todo-store';

function TodoFilter() {
  const { showCompleted, toggleShowCompleted } = useUI((s) => s);

  return (
    <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
      <h2 className="fs-4">Your Todos</h2>
      <div className="form-check form-switch mb-2">
        <input
          role="switch"
          type="checkbox"
          id="filter-toggle"
          checked={showCompleted}
          className="form-check-input"
          onChange={toggleShowCompleted}
        />
        <label className="form-check-label" htmlFor="filter-toggle">
          show completed
        </label>
      </div>
    </div>
  );
}

export default TodoFilter;
