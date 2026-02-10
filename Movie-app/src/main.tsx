import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
        <AuthProvider>
            <FavoritesProvider>
                <App />
            </FavoritesProvider>
        </AuthProvider>
    </BrowserRouter>
)
