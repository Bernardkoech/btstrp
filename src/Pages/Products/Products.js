import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='container'>
      <section className="py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <h1 className="fw-light">Our Amazing Products</h1>
              <p className="lead text-body-secondary">
                Explore our range of high-quality products that cater to your needs and preferences. Our products are designed to enhance your daily life and bring joy and efficiency.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/cards" className="me-2" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-primary">View Products</button>
                </Link>
                <Link to="/contacts" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-outline-secondary">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
