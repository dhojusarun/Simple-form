import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { ReactNode } from 'react';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location, requireLogin: true }} replace />;
    }

    return <>{children}</>;
};
