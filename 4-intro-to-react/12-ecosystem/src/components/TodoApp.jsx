import { useState } from 'react';
import { useTodos } from '../hooks/use-todos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

function TodoApp() {
  const { listQuery, add } = useTodos();
  const [adding, setAdding] = useState(false);

  if (listQuery.isLoading) return <p>Loading…</p>;
  if (listQuery.isError)
    return <p className="text-warning">Error: {listQuery.error.message}</p>;

  const handleAdd = async (task) => {
    setAdding(true);
    try {
      await add.mutateAsync(task);
    } finally {
      setAdding(false);
    }
  };

  return (
    <>
      <TodoForm pending={adding || add.isPending} onAdd={handleAdd} />
      <hr />
      <div className="py-3">
        <TodoFilter />
        <TodoList />
      </div>
    </>
  );
}

export default TodoApp;
