import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TrendingMovies from "./pages/TrendingMovies";
import PopularMovies from "./pages/PopularMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Movie available pages */}
        <Route path="/" element={<Home />} />
        <Route path="/trendingmovies" element={<TrendingMovies />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/upcomingmovies" element={<UpcomingMovies />} />
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

        {/* login and signup pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;