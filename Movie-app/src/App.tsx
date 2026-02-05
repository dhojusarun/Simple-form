import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TrendingMovies from "./pages/TrendingMovies";
import PopularMovies from "./pages/PopularMovies";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {/* Movie available pages */}
        <Route path="/" element={<Home />} />
        <Route path="/trendingmovies" element={<TrendingMovies />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        
        {/* login and signup pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;