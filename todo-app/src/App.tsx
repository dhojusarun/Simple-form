import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompletedTasks from "./pages/CompletedTasks";
import IncompleteTasks from "./pages/IncompleteTasks";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
    return (
        <ThemeProvider>
            <TodoProvider>
                <Router>
                    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                        <Navigation />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/completed" element={<CompletedTasks />} />
                            <Route path="/incomplete" element={<IncompleteTasks />} />
                        </Routes>
                    </div>
                </Router>
            </TodoProvider>
        </ThemeProvider>
    );
}