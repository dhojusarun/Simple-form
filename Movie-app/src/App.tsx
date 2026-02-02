import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewMovies from "./pages/NewMovies";
import PopularMovies from "./pages/PopularMovies";
import TrendingMovies from "./pages/TrendingMovies";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trendingmovies" element={<TrendingMovies />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/newmovies" element={<NewMovies />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;