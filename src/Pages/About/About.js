import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mt-5">
    <br />
      <div className="row">
        <div className="col-md-6">
        <img src="https://i.pinimg.com/564x/e2/da/2d/e2da2d36f5b2961f009d908b5edbaedc.jpg" className="img-fluid" alt="" />

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
            <button className="btn btn-primary ">Contact Us</button>
          </Link>
        </div>
        <div className="col-md-6">
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/XMwoYeNdvLs?si=Fq5HWt_geHBHqVN-" title="YouTube video" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
