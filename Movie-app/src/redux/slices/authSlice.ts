import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserData {
    fullName: string;
    email: string;
}

interface AuthState {
    isLoggedIn: boolean;
    userData: UserData | null;
}

const initialState: AuthState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
    userData: (() => {
        const data = localStorage.getItem('userData');
        return data ? JSON.parse(data) : null;
    })(),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserData>) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userData', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('userData');
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
