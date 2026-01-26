import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const todo = state.todos.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
