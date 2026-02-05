// src/components/HeroSection.jsx
function HeroSection({ title, text, image }) {
  return (
    <div className="home">
      <div className="container">
        <div className="text-area">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="container-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
