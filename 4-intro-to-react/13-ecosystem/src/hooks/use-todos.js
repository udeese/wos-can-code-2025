import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from '../lib/api';

function useTodos() {
  const qc = useQueryClient();

  const listQuery = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 5_000,
  });

  const add = useMutation({
    mutationFn: addTodo,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  });

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

  const remove = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  });

  return { listQuery, add, toggle, remove };
}

export { useTodos };
