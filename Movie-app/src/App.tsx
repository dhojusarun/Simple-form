import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import TrendingMovies from "./pages/TrendingMovies";
import PopularMovies from "./pages/PopularMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import SearchResults from "./pages/SearchResults";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Protected movie pages */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trendingmovies"
          element={
            <ProtectedRoute>
              <TrendingMovies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/popularmovies"
          element={
            <ProtectedRoute>
              <PopularMovies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upcomingmovies"
          element={
            <ProtectedRoute>
              <UpcomingMovies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchResults />
            </ProtectedRoute>
          }
        />

        {/* Public login and signup pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;