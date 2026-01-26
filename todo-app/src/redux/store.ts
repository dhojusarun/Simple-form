import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice.ts';
import type { TodoState } from './todoSlice.ts';

export const store = configureStore({
    reducer: {
        todos: todoReducer as any as (state: TodoState | undefined, action: any) => TodoState,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
