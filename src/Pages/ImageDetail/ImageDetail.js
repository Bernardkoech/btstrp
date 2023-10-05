import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ImageDetail.css"


const ImageDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    // Fetch the specific card based on the id
    fetch(`https://test-api-137p.onrender.com/cards/${id}`)
      .then((response) => response.json())
      .then((data) => setCard(data))
      .catch((error) => console.error("Error fetching card:", error));
  }, [id]);

  if (!card) {
    return <div>Loading...</div>;
  }

  const phoneNumber = "+254740087715"; // Replace with your phone number
  const message = `Hello! I'm interested in the: ${window.location.href}`;

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="image-detail-container">
      <div className="row">
        <div className="col-md-6">
          <img src={card.image} alt="Card" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Image Details</h2>
              <p className="card-text">{card.description}</p>
              <button className="btn btn-success" onClick={handleWhatsAppClick}>
                Enquire via WhatsApp
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
