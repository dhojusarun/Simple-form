import type { Todo } from "../redux/todoSlice";
import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDoubleClick = () => {
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
    <li className="group bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 mb-3 p-4 border border-gray-100 dark:border-gray-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
          />
          {isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 px-3 py-1 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100"
            />
          ) : (
            <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
              <span
                onDoubleClick={handleDoubleClick}
                className={`cursor-pointer text-lg transition-all break-words whitespace-normal min-w-0 ${todo.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : "text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-300"
                  }`}
                title="Double-click to edit"
              >
                {todo.text}
              </span>
              {todo.completed && (
                <span className="shrink-0 text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-600 text-emerald-900 dark:text-emerald-50 rounded-full font-bold">
                  Completed
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
          <button
            onClick={() => {
              if (!todo.completed) {
                setIsEditing(true);
                setEditText(todo.text);
              }
            }}
            disabled={todo.completed}
            className="px-3 py-2 text-blue-700 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800/40 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            title="Edit task"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="px-3 py-2 text-red-700 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-800/40 rounded-lg transition-all duration-200 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
