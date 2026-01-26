import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { addTodo as addAction, toggleTodo as toggleAction, deleteTodo as deleteAction, editTodo as editAction } from "../redux/todoSlice.ts";
import type { RootState } from "../redux/store.ts";

export function useTodos() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todos.todos);

  const addTodo = (text: string) => dispatch(addAction(text));
  const toggleTodo = (id: number) => dispatch(toggleAction(id));
  const deleteTodo = (id: number) => dispatch(deleteAction(id));
  const editTodo = (id: number, text: string) => dispatch(editAction({ id, text }));

  return { todos, addTodo, toggleTodo, deleteTodo, editTodo };
}