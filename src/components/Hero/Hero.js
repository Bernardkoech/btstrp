import React from 'react';
import "./Hero.css"

const Hero = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel carousel-fade slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://mountainclubkenya.org/wp-content/uploads/2016/06/P1150533.jpg"
            className="d-block w-100"
            alt="Slide 1"
            style={{ objectFit: 'cover' }}
          />
          <div className="carousel-caption d-md-block">
            <h1>First slide label</h1>
            <p>Some representative placeholder content for the first slide.</p>

          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/30/cd/d2/nakuru-national-park.jpg?w=1200&h=-1&s=1"
            className="d-block w-100"
            alt="Slide 2"
            style={{ objectFit: 'cover' }}
          />
          <div className="carousel-caption d-md-block">
            <h1>Second slide label</h1>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMGNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            className="d-block w-100"
            alt="Slide 3"
            style={{ objectFit: 'cover' }}
          />
          <div className="carousel-caption d-md-block">
            <h1>Third slide label</h1>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
