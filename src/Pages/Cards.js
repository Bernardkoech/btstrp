import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ cards }) => {
  return (
    <div className="container py-5">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow rounded">
              <div className="image-container">
                <img
                  src={card.image}
                  className="card-img-top img-fluid"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <div className="text-center">
                  <Link to={`/image/${card.id}`} style={{ textDecoration: 'none' }}>
                    <button className="btn btn-outline-primary">View</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
