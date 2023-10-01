import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mt-5">
    <br />
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">About Us</h2>
          <p>
            Welcome to our website! We are dedicated to providing quality
            services and products to our customers.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            lectus nec metus convallis ullamcorper. Fusce ac ligula vitae
            metus faucibus consectetur.
          </p>
          <Link to="/contacts">
            <button className="btn btn-primary">Contact Us</button>
          </Link>
        </div>
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/400"
            alt="About Us"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
