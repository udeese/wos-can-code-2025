

# `todo-store.js` — Zustand store explained

This file creates a very small **global state store** with [Zustand](https://github.com/pmndrs/zustand). Instead of passing props down through many layers, we use Zustand to keep UI-related flags in one place.

---

## What the store holds
```js
const useUI = create((set) => ({
  showCompleted: true,
  toggleShowCompleted: () => set((s) => ({ showCompleted: !s.showCompleted })),
  pendingId: null,
  setPendingId: (id) => set({ pendingId: id }),
}));
```

- **`showCompleted: true`**
  - Boolean flag that determines if completed todos should be visible.

- **`toggleShowCompleted`**
  - Flips `showCompleted` true ↔ false.
  - Demonstrates how to update state based on the *previous* state (`set((s) => …)`).

- **`pendingId: null`**
  - Holds the ID of a todo currently in a “pending” operation (like delete).
  - Lets the UI show a spinner/disable a button for just that one item.

- **`setPendingId(id)`**
  - Sets the `pendingId` to a given ID (or `null` to clear).

---

## How components use it
```jsx
import { useUI } from '../store/todo-store';

function Toolbar() {
  const showCompleted = useUI((s) => s.showCompleted);
  const toggle = useUI((s) => s.toggleShowCompleted);

  return (
    <button onClick={toggle}>
      {showCompleted ? 'Hide completed' : 'Show completed'}
    </button>
  );
}
```
- `useUI(selector)` subscribes the component to just the parts of state it needs.
- This avoids unnecessary re-renders.

---

## Why Zustand here?
- **Tiny API:** only `create` and a simple `set` function.
- **No boilerplate:** you don’t need reducers, actions, or context providers.
- **Scoped usage:** good for UI toggles and ephemeral state that doesn’t belong in the database.

---

## Mini-exercises
1. **Add a darkMode flag** — default `false`, with `toggleDarkMode`. Hook it up to a button that switches CSS class.
2. **Add an error message field** — set and clear it from components, then render it in a banner.
3. **Time-travel demo** — log every state change with `subscribe` and show how state updates flow.