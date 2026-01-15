import { useState } from "react";
import "./Todo.css"
function Todo() {
  const [task, setTask] = useState("");        
  const [tasks, setTasks] = useState<string[]>([]); 
  const [editIndex, setEditIndex] = useState<number | null>(null); 
 const handleAddOrEdit = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const newTasks = [...tasks];
      newTasks[editIndex] = task;
      setTasks(newTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask(""); 
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (editIndex === index) setEditIndex(null); 
  };

   const editTask = (index: number) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };


  return (
   <div className="todo-container">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddOrEdit}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-msg">No tasks yet</p>
      ) : (
        <ul className="task-list">
          {tasks.map((t, i) => (
            <li key={i} className="task-item">
              <span>{t}</span>
              <div className="task-buttons">
                <button className="edit-btn" onClick={() => editTask(i)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteTask(i)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;