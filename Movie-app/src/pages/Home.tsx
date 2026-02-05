// src/pages/Home.jsx
import HeroSection from "../components/HeroSection";
import TrendingMovies from "../components/TrendingMovies";
import home_image from "../assets/Images/home_image.jpg";

function Home() {
  return (
    <>
      <HeroSection 
        title="Welcome to MovieMania"
        text="Your ultimate destination for discovering and exploring the latest and greatest movies. From timeless classics to the hottest new releases — start your movie journey today!"
        image={home_image}
      />
      <TrendingMovies />
    </>
  );
}

export default Home;
