import TodoItem from "./TodoItem";
import type { Todo } from "../pages/Home";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
}: Props) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 transition-colors duration-300">
        <p className="text-gray-400 dark:text-gray-500 text-base sm:text-lg">No todos yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-0">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}
