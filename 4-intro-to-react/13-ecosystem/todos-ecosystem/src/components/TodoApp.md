

# `TodoApp.jsx` — Companion Notes

This is the **top-level UI component** for the demo. It wires together the form, filter, and list, and coordinates the add‑todo flow using **TanStack Query** and **React Hook Form**.

---

## Responsibilities
- Initialize/own lightweight UI state related to adding (`adding`).
- Read **server state** via `useTodos()` (React Query) for loading/error handling and mutation (`add`).
- Pass simple props to children so each stays focused:
  - `TodoForm` → `onAdd`, `pending`
  - `TodoFilter` → reads state from the Zustand store
  - `TodoList` → reads data from the query and filters via the store

---

## Imports
```js
import { useState } from 'react';
import { useTodos } from '../hooks/use-todos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
```
- `useTodos`: exposes `listQuery` (fetch) and `add` (mutation).
- `useState`: tiny bit of local UI state for the add flow.
- Child components are presentation-focused and keep their own concerns small.

---

## Data fetching and error states
```jsx
const { listQuery, add } = useTodos();
if (listQuery.isLoading) return <p>Loading…</p>;
if (listQuery.isError) return <p className="text-warning">Error: {listQuery.error.message}</p>;
```
- **Loading**: early‑return keeps the render simple.
- **Error**: early‑return with a short message (React Query provides `error`).
- Once loaded, `listQuery.data` is available to downstream components.

---

## Adding flow (parent coordinates, child stays dumb)
```js
const [adding, setAdding] = useState(false);

const handleAdd = async (task) => {
  setAdding(true);
  try {
    await add.mutateAsync(task);
  } finally {
    setAdding(false);
  }
};
```
- Parent knows about the **mutation** (`add`) and wraps it with a local `adding` flag.
- This keeps `TodoForm` reusable; it simply calls `onAdd(task)` and shows a disabled state via the `pending` prop.
- We also pass `add.isPending` from React Query, so the button disables during both the form submit and the network mutation.

---

## Rendering / composition
```jsx
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
```
- **`TodoForm`**: validation via Zod (inside the component) + submit via `onAdd`.
- **`TodoFilter`**: reads/writes the `showCompleted` flag from the Zustand store.
- **`TodoList`**: reads `listQuery.data` (through `useTodos`) and applies the filter from the store; renders `TodoItem`s.

---

## Why this separation?
- **Server state vs. UI state**: React Query owns todos and mutation lifecycles; Zustand owns view toggles/pending item IDs; React local state (`adding`) coordinates the parent‑level submit UX.
- **Testability**: You can unit‑test `TodoForm` in isolation by passing a mock `onAdd`.
- **Reusability**: `TodoFilter`/`TodoList` don’t need to know about the form, only about store/query.

---

## Teaching callouts
- Early returns for loading/error keep components readable.
- Parent coordinates async work; children stay dumb (props in, callbacks out).
- Show how `add.isPending` (React Query) and `isSubmitting` (RHF) can both affect UI state.

---

## Mini‑exercises
1. **Add a header count**: Show `X of Y completed` above the list (derive from `listQuery.data`).
2. **Handle server errors**: Catch mutation failures in `handleAdd` and show a toast/banner.
3. **Clear on success**: Move the form reset into `handleAdd` by having `onAdd` return the created row and conditionally resetting based on success.
4. **Realtime bonus**: Subscribe to Supabase Realtime and invalidate the `['todos']` query on DB changes.