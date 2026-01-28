import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function TodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 ring-primary focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-50"
      />
      
      <button
        type="submit"
        className="px-6 py-3 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
      >
        Add Todo
      </button>
    </form>
  );
}
