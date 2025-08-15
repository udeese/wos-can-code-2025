

# `TodoItem.jsx` — Companion Notes

This component represents a **single todo item** in the list. It handles:
- Displaying the task text and completion status.
- Toggling completion on/off.
- Deleting the todo (with a spinner when pending).

---

## Imports
```js
import { useTodos } from '../hooks/use-todos';
import { useUI } from '../store/todo-store';
import { TrashFill } from 'react-bootstrap-icons';
import Spinner from './Spinner';
```
- **`useTodos`**: custom hook with TanStack Query mutations (`remove`, `toggle`).
- **`useUI`**: Zustand store for `pendingId` and `setPendingId`.
- **Icons/Spinner**: for delete button visuals.

---

## State and actions
```js
const { remove, toggle } = useTodos();
const { pendingId, setPendingId } = useUI((s) => s);
```
- `remove`: mutation for deleting a todo.
- `toggle`: mutation for marking a todo complete/incomplete.
- `pendingId`: ID of the todo currently being deleted.
- `setPendingId`: sets/clears that ID.

---

## Toggle handler
```js
const handleToggle = (e, id) => {
  const { checked } = e.target;
  toggle.mutate({ id, is_complete: checked });
};
```
- When the checkbox is clicked, run the `toggle` mutation.
- Uses **optimistic UI** from `use-todos.js` so the checkbox feels instant.

---

## Delete handler
```js
const handleDelete = async (id) => {
  setPendingId(id);
  try {
    await remove.mutateAsync(id);
  } finally {
    setPendingId(null);
  }
};
```
- Mark the todo ID as pending (so the button disables + shows spinner).
- Await the delete mutation.
- Always clear `pendingId` when finished (success or error).

---

## Rendered markup
```jsx
<li className={`list-group-item d-flex justify-content-between align-items-center ${
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
```
- **`li`** wrapper: Bootstrap classes, adds grey background if complete.
- **Checkbox + label**: shows task text, strikes it out if complete.
- **Delete button**: disabled + spinner while deleting, otherwise shows trash icon.

---

## Why separate this out?
- **Single responsibility**: each item manages its own toggle/delete.
- **Reusability**: can be used inside different list UIs.
- **Readability**: keeps `TodoList` simple.

---

## Mini-exercises
1. Add an **edit button**: open a text field to change the task, then update via a new mutation.
2. Add a **confirmation prompt** before delete (e.g. `window.confirm`).
3. Style completed tasks differently (e.g. strike-through text).