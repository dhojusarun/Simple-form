import * as React from 'react';
import { type ReactNode } from 'react';

const { createContext, useContext, useState, useEffect } = React;

interface UserData {
    fullName: string;
    email: string;
}

interface AuthContextType {
    isLoggedIn: boolean;
    userData: UserData | null;
    login: (userData: UserData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const [userData, setUserData] = useState<UserData | null>(() => {
        const data = localStorage.getItem('userData');
        return data ? JSON.parse(data) : null;
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn.toString());
        if (userData) {
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            localStorage.removeItem('userData');
        }
    }, [isLoggedIn, userData]);

    const login = (data: UserData) => {
        setUserData(data);
        setIsLoggedIn(true);
    };
    const logout = () => {
        setUserData(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
