import '../CSS/Home.css';
import home_image from '../assets/Images/home_image.jpg';
import NewMovies from './NewMovies';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrendingMovies';

function Home() {
  
  return (
    <div className="home">
      <div className="container">
        <div className="text-area">
          <h1>Welcome to MovieMania</h1>
          <p>Your ultimate destination for discovering and exploring the latest and greatest movies. Dive into a world of cinematic wonders, from timeless classics to the hottest new releases. Whether you're a casual viewer or a dedicated cinephile, MovieMania has something for everyone. Start your movie journey with us today!</p>
        </div>
        <div className="container-image">
        <img src={home_image} alt="Home Page Image" />
        </div>
      </div>
      <TrendingMovies/>
      <PopularMovies/>
      <NewMovies/>
    </div>
  );
}

export default Home;
