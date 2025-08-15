# What are we doing in this file?
# `use-todos.js` — What’s happening here?

This custom hook bundles **TanStack Query** calls (fetching + mutations) for our `todos` table so components can stay small and declarative.

> TL;DR: `useTodos()` returns four things:
> - `listQuery` — the query for listing todos
> - `add` — a mutation to insert a todo
> - `toggle` — a mutation to mark complete/incomplete (with **optimistic UI**)
> - `remove` — a mutation to delete a todo

---

## Imports
```js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from '../lib/api';
```
- We pull in **React Query** primitives and the **Supabase API functions**.
- API functions return `data` or throw on error so React Query can manage error state.

## Creating the Query Client in the hook
```js
const qc = useQueryClient();
```
- Gives us access to the **cache** so we can invalidate queries or write to cached data during optimistic updates.

## Listing Todos
```js
const listQuery = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 5_000,
});
```
- `queryKey` uniquely identifies the cache entry. Any time we **invalidate** `['todos']`, React Query will refetch.
- `staleTime: 5000` ms means the data is considered **fresh** for 5 seconds (avoids extra refetches while navigating the UI).
- Components can read: `listQuery.data`, `listQuery.isLoading`, `listQuery.error`, etc.

## Adding a Todo
```js
const add = useMutation({
  mutationFn: addTodo,
  onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
});
```
- Runs `addTodo(task)` which inserts a row and returns it.
- On success we **invalidate** `['todos']` so the list refetches with the new item.

## Toggling Complete (Optimistic Update)
```js
const toggle = useMutation({
  mutationFn: ({ id, is_complete }) => toggleTodo(id, is_complete),

  onMutate: async ({ id, is_complete }) => {
    await qc.cancelQueries({ queryKey: ['todos'] });
    const prev = qc.getQueryData(['todos']);
    qc.setQueryData(['todos'], (old = []) =>
      old.map((t) => (t.id === id ? { ...t, is_complete } : t))
    );
    return { prev };
  },

  onError: (_err, _vars, ctx) =>
    ctx?.prev && qc.setQueryData(['todos'], ctx.prev),

  onSettled: () => qc.invalidateQueries({ queryKey: ['todos'] }),
});
```
**What’s going on?**
- **`onMutate`** (fires *before* the request goes out):
  1) cancel any in-flight refetches for `['todos']`
  2) snapshot current cache as `prev`
  3) **optimistically** update the cache so the UI feels instant
  4) return `{ prev }` so error handlers have a rollback snapshot
- **`onError`**: if the request fails, restore the cache to `prev` (undo the optimistic change).
- **`onSettled`**: whether success or error, invalidate to sync with the server.

> Optimistic UI is great for toggles/checkmarks because it makes the app feel snappy and the rollback path is simple.

## Deleting a Todo
```js
const remove = useMutation({
  mutationFn: deleteTodo,
  onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
});
```
- After a successful delete, invalidate to refresh the list.

## What `useTodos()` returns
```js
return { listQuery, add, toggle, remove };
```
Each is an object from React Query:
- `listQuery`: `{ data, isLoading, isError, error, refetch, … }`
- `add`, `toggle`, `remove`: `{ mutate, mutateAsync, isPending, isError, error, … }`

---

## How components use this
```jsx
const { listQuery, add, toggle, remove } = useTodos();

if (listQuery.isLoading) return <p>Loading…</p>;
if (listQuery.isError) return <p>Error: {listQuery.error.message}</p>;

return (
  <>
    <button onClick={() => add.mutate('Write docs')}>Add</button>
    {listQuery.data.map((t) => (
      <div key={t.id}>
        <input
          type="checkbox"
          checked={t.is_complete}
          onChange={(e) => toggle.mutate({ id: t.id, is_complete: e.target.checked })}
        />
        <button onClick={() => remove.mutate(t.id)}>Delete</button>
      </div>
    ))}
  </>
);
```

---

## Error handling model (why no `try/catch` here?)
- Our API helpers (`fetchTodos`, etc.) **throw** on failure.
- React Query expects thrown errors so it can set `.error` and `.isError`. We keep the hook thin and let components render error UI.
- If you want logging or custom messages, add `onError` callbacks in the mutations/queries.


## Mini-exercises
1. **Add ordering:** Change the fetch function to order by `created_at` descending (it already does in our API file—find it!).
2. **Add an edit mutation:** Create `editTodo` and update `task` text with optimistic UI (copy the toggle pattern).
3. **Realtime bonus:** Subscribe to Supabase Realtime and call `qc.invalidateQueries` on DB changes.