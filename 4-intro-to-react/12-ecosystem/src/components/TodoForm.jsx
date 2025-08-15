import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Spinner from './Spinner';
import { PlusLg } from 'react-bootstrap-icons';

// Zod schema: required task, trimmed, modest max length for UX
const TodoSchema = z.object({
  task: z
    .string()
    .transform((v) => v.trim())
    .pipe(
      z
        .string()
        .min(1, 'Task is required')
        .max(200, 'Keep it under 200 characters')
    ),
});

/**
 * TodoForm — uses React Hook Form + Zod for validation
 * Props:
 *   onAdd: (task: string) => Promise<void> | void
 *   pending?: boolean — disables submit while adding
 */
function TodoForm({ onAdd, pending = false }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(TodoSchema),
    defaultValues: { task: '' },
    mode: 'onBlur',
  });

  const onSubmit = async ({ task }) => {
    await onAdd?.(task);
    reset();
  };

  return (
    <div className="py-2">
      <h2 className="fs-6">Add Todo</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex gap-2 align-items-start mb-3">
        <div className="flex-grow-1">
          <input
            placeholder="Add a task…"
            {...register('task')}
            className="form-control"
            aria-invalid={errors.task ? 'true' : 'false'}
            aria-describedby={errors.task ? 'task-error' : undefined}
          />
          {errors.task && (
            <span id="task-error" className="form-text text-warning">
              {errors.task.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={pending || isSubmitting}
          className="btn btn-primary">
          {pending || isSubmitting ? <Spinner /> : <PlusLg size={20} />}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
