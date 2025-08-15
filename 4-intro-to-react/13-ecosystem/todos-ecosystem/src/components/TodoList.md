

# `TodoList.jsx` — Companion Notes

This component is responsible for rendering the **list of todos**. It does not manage adding, deleting, or toggling directly — it simply pulls todos from the query and renders each one as a `TodoItem`.

---

## Imports
```js
import { useTodos } from '../hooks/use-todos';
import { useUI } from '../store/todo-store';
import TodoItem from './TodoItem';
```
- **`useTodos`**: custom hook with TanStack Query integration. We use it here to access `listQuery` (the query for fetching todos).
- **`useUI`**: Zustand store. We use it here to read the `showCompleted` flag.
- **`TodoItem`**: separate component that handles toggling and deleting a single todo.

---

## Getting the todos
```js
const { listQuery } = useTodos();
const todos = listQuery.data ?? [];
```
- `listQuery.data` contains the array of todos once loaded.
- `?? []` ensures we don’t crash on first render before data is ready.

---

## Filtering logic
```js
const showCompleted = useUI((s) => s.showCompleted);
const filtered = showCompleted ? todos : todos.filter((t) => !t.is_complete);
```
- Reads the `showCompleted` flag from Zustand.
- If true → show all todos.
- If false → filter out completed ones.

---

## Empty state
```js
if (!filtered.length) return <p className="text-muted">No todos yet.</p>;
```
- If the filtered list is empty, show a helpful message.
- Keeps the UI from rendering an empty `<ul>`.

---

## Rendering the list
```jsx
<ul className="list-group">
  {filtered.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))}
</ul>
```
- Uses a Bootstrap list group for styling.
- Maps over todos and renders a `TodoItem` for each.
- **Key point for teaching**: `key={todo.id}` ensures React can track each item reliably.

---

## Why separate `TodoList` from `TodoItem`?
- **Single responsibility**: `TodoList` just handles fetching + filtering.
- **Delegation**: `TodoItem` handles the UI/actions for each row.
- **Clarity**: keeps this file short and easy to read.

---

## Mini-exercises
1. Add a “completed count” paragraph under the list (hint: use `todos.filter`).
2. Add sorting so the newest todos appear first.
3. Highlight completed todos differently (e.g. add `text-muted` or strike-through).