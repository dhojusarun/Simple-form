import TodoList from "../components/TodoList";

export default function CompletedTasks() {
    return (
        <div className="container mx-auto px-4 py-6 sm:py-8 max-w-3xl">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 transition-colors duration-300">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Completed Tasks</h1>
                <TodoList filter="completed" />
            </div>
        </div>
    );
}
