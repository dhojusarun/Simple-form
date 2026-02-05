import "../CSS/Home.css";
import home_image from "../assets/Images/home_image.jpg";

function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <div className="container">
        <div className="text-area">
          <h1>Welcome to MovieMania</h1>
          <p>
            Your ultimate destination for discovering and exploring the latest
            and greatest movies. From timeless classics to the hottest new
            releases — start your movie journey today!
          </p>
        </div>

        <div className="container-image">
          <img src={home_image} alt="Home Page" />
        </div>
      </div>
    </div>
  );
}

export default Home;
