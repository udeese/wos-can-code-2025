import { useTodos } from '../hooks/use-todos';
import { useUI } from '../store/todo-store';
import { TrashFill } from 'react-bootstrap-icons';
import Spinner from './Spinner';

function TodoItem({ todo }) {
  const { remove, toggle } = useTodos();
  const { pendingId, setPendingId } = useUI((s) => s);

  const handleToggle = (e, id) => {
    const { checked } = e.target;
    toggle.mutate({ id, is_complete: checked });
  };

  const handleDelete = async (id) => {
    setPendingId(id);
    try {
      await remove.mutateAsync(id);
    } finally {
      setPendingId(null);
    }
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.is_complete ? 'bg-body-secondary' : ''
      }`}>
      <div className="form-check">
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.is_complete}
          className="form-check-input"
          onChange={(e) => handleToggle(e, todo.id)}
        />
        <label
          className={`form-check-label ${todo.is_complete ? 'text-muted' : ''}`}
          htmlFor={todo.id}>
          {todo.task}
        </label>
      </div>
      <button
        type="button"
        disabled={pendingId === todo.id}
        className="btn btn-sm btn-danger"
        onClick={() => handleDelete(todo.id)}>
        {pendingId === todo.id ? <Spinner /> : <TrashFill />}
      </button>
    </li>
  );
}

export default TodoItem;
