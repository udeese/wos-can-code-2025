import { useTodos } from '../hooks/use-todos';
import { useUI } from '../store/todo-store';
import TodoItem from './TodoItem';

function TodoList() {
  const { listQuery } = useTodos();
  const todos = listQuery.data ?? [];

  const showCompleted = useUI((s) => s.showCompleted);
  const filtered = showCompleted ? todos : todos.filter((t) => !t.is_complete);

  if (!filtered.length) return <p className="text-muted">No todos yet.</p>;

  return (
    <ul className="list-group">
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
