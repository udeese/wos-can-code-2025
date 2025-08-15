

# `TodoForm.jsx` — React Hook Form + Zod, explained

This component showcases a clean pattern for **form validation** in React using **React Hook Form (RHF)** and **Zod**. It’s purposely small so students can focus on the flow:

1) User types a task → 2) validation runs (client-side) → 3) submit calls `onAdd(task)` → 4) form resets.

---

## Key ideas at a glance
- **Schema-first validation** with Zod (`TodoSchema`).
- **`zodResolver`** to plug Zod into RHF.
- **`mode: 'onBlur'`** so validation messages show after the user leaves the field.
- **Accessible** errors via `aria-invalid` and `aria-describedby`.
- **Pending state** from both parent (`pending`) and RHF (`isSubmitting`) to disable the button and show a spinner.

---

## The Zod schema
```js
const TodoSchema = z.object({
  task: z
    .string()
    .transform((v) => v.trim())
    .pipe(
      z.string().min(1, 'Task is required').max(200, 'Keep it under 200 characters')
    ),
});
```
**What’s happening:**
- `transform((v) => v.trim())` removes leading/trailing whitespace **before** validation—so "   " becomes "".
- `.pipe(z.string().min(1))` validates the transformed value. If it’s empty after trim, you get the "Task is required" message.
- The `max(200)` cap is a light UX guard (feel free to tweak).

> Teaching tip: This shows students a practical pattern—**normalize then validate**.

---

## RHF setup
```js
const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
  resolver: zodResolver(TodoSchema),
  defaultValues: { task: '' },
  mode: 'onBlur',
});
```
- **`resolver`**: connects Zod so RHF can produce `errors` with `.message` strings.
- **`defaultValues`**: initial form state.
- **`mode: 'onBlur'`**: validate when the user leaves the field (good middle ground between onSubmit and onChange).
- **`isSubmitting`**: a built-in RHF flag you can use to disable UI during async submits.

---

## Submit flow
```js
const onSubmit = async ({ task }) => {
  await onAdd?.(task);
  reset();
};
```
- `handleSubmit(onSubmit)` runs Zod validation first; only valid data reaches `onSubmit`.
- The component expects an **`onAdd(task)`** prop (async OK). After it resolves, we call `reset()`.

---

## Accessible input + error message
```jsx
<input
  {...register('task')}
  aria-invalid={errors.task ? 'true' : 'false'}
  aria-describedby={errors.task ? 'task-error' : undefined}
/>
{errors.task && (
  <span id="task-error" className="form-text text-warning">
    {errors.task.message}
  </span>
)}
```
- `aria-invalid` signals invalid state to assistive tech.
- `aria-describedby` points to the error element’s ID so screen readers announce it.

---

## Button, spinner, and disabling logic
```jsx
<button type="submit" disabled={pending || isSubmitting} className="btn btn-primary">
  {pending || isSubmitting ? <Spinner /> : <PlusLg size={20} />}
</button>
```
- The button is disabled when either the **parent** says we’re busy (`pending`) or RHF is mid-submit (`isSubmitting`).
- Visual feedback: show a **spinner** while submitting, otherwise a plus icon.

---

## Props contract (what this component needs)
- `onAdd(task: string): Promise<void> | void` — called with a **trimmed, validated** task.
- `pending?: boolean` — optional; lets the parent reflect API in-flight state.

---

## Typical usage
```jsx
import TodoForm from './TodoForm';
import { useTodos } from '../hooks/useTodos';

function Panel() {
  const { add } = useTodos();
  return (
    <TodoForm
      pending={add.isPending}
      onAdd={(task) => add.mutateAsync(task)}
    />
  );
}
```
- `add.isPending` comes from TanStack Query’s mutation object.
- `mutateAsync` returns a promise, which matches our `onAdd` expectation.

---

## Common tweaks (good exercises)
1. **Change validation mode**: try `mode: 'onChange'` for instant feedback.
2. **Add min length** for non-whitespace characters only (hint: refine with a regex that ignores spaces).
3. **Disallow duplicates**: pass the current list down and add a Zod `.refine()` to check collisions.
4. **Show server errors**: catch Supabase errors in the parent, pass a `serverError` prop, and render it under the field.

---

## Why this pattern?
- Clear separation of concerns (schema → resolver → UI).
- Minimal re-renders (RHF is built for performance).
- Easy to extend (more fields = extend the Zod object and add inputs).

```diff
- Complex form logic scattered across components
+ Single source of truth (Zod) + small, accessible form component
```