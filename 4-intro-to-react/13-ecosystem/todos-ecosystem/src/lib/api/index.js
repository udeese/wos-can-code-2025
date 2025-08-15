import { supabase } from '../supabase';

async function fetchTodos() {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

async function addTodo(task) {
  const { data, error } = await supabase
    .from('todos')
    .insert({ task })
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function toggleTodo(id, is_complete) {
  const { data, error } = await supabase
    .from('todos')
    .update({ is_complete })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function deleteTodo(id) {
  const { error } = await supabase.from('todos').delete().eq('id', id);
  if (error) throw error;
  return id;
}

export { fetchTodos, addTodo, toggleTodo, deleteTodo };
