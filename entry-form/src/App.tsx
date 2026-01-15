import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import FormPage from "./pages/Entryform";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
