import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './context/FavoritesContext.tsx'

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
        <FavoritesProvider>
            <App />
        </FavoritesProvider>
    </BrowserRouter>
)
