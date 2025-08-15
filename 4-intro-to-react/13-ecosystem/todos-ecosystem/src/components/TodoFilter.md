

# `TodoFilter.jsx` — Companion Notes

This component is a small **UI control** that lets the user show or hide completed todos. It’s wired up to the Zustand store (`todo-store.js`).

---

## What it imports
```js
import { useUI } from '../store/todo-store';
```
- `useUI` is our Zustand store hook.
- We’ll use selectors to pull out only the parts we need.

---

## Local state from the store
```js
const showCompleted = useUI((s) => s.showCompleted);
const toggleShowCompleted = useUI((s) => s.toggleShowCompleted);
```
- `showCompleted`: boolean that decides if completed todos appear.
- `toggleShowCompleted`: action to flip that flag.
- Using explicit selectors avoids unnecessary re-renders (component only updates if those values change).

---

## Rendered structure
```jsx
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
```
- **Heading:** “Your Todos.”
- **Switch input:** a Bootstrap-style toggle switch.
  - `checked={showCompleted}` makes it reflect the state.
  - `onChange={toggleShowCompleted}` updates the store when toggled.
- **Label:** statically says “show completed.” (We could make it dynamic, but here it stays fixed for simplicity.)

---

## Why this is separate from `TodoList`
- Keeps **concerns separated**: `TodoList` only renders items, `TodoFilter` only controls visibility.
- Demonstrates how multiple components can read/write the same Zustand store.
- Clean example of colocating state in a store instead of prop drilling.

---

## Mini-exercises
1. Change the label text dynamically: “Show completed” vs. “Hide completed.”
2. Add a second toggle for “Show only high priority” (you’d need to add a `priority` field to todos).
3. Try moving the `showCompleted` flag into React local state (`useState`) and compare: why is Zustand nicer when multiple components need the same toggle?