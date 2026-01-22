import type { Todo } from "../pages/Home";
import { useState } from "react";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditClick = () => {
    if (!todo.completed) {
      setIsEditing(true);
      setEditText(todo.text);
    }
  };

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText.trim());
      setIsEditing(false);
    } else {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="group bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 mb-3 p-3 sm:p-4 border border-gray-100 dark:border-gray-600">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer flex-shrink-0"
          />
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 px-2 sm:px-3 py-1 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
            />
          ) : (
            <span
              className={`flex-1 text-base sm:text-lg transition-all break-words ${todo.completed
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "text-gray-800 dark:text-gray-100"
                }`}
            >
              {todo.text}
            </span>
          )}
        </div>

        <div className="flex gap-1 sm:gap-2 flex-shrink-0">
          {!todo.completed && !isEditing && (
            <button
              onClick={handleEditClick}
              className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-base text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              title="Edit todo"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => deleteTodo(todo.id)}
            className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-base text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
