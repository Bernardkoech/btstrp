import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {


  return (
    <div>

      <section className="py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <h1 className="fw-light">Ben's Website</h1>
              <p className="lead text-body-secondary">
                Welcome to my Journey: A Tale of Life's Adventures
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, natus hic? Tenetur, delectus laborum. Tempora perspiciatis natus quasi soluta architecto ut, quae deleniti libero blanditiis facere officiis beatae corrupti iusto!
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/contacts" className="me-2" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-primary">Main call to action</button>
                </Link>
                <Link to="/contacts" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-outline-secondary">Secondary action</button>
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
