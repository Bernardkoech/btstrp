import React from 'react';

const Pricing = () => {
  return (
    <div className="container">
      <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">ksh0<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Standard</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">ksh 1,000<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">ksh 2,000<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>50 users included</li>
                <li>30 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
