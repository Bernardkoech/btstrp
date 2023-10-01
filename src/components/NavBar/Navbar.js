import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const closeNavbar = () => {
    document.getElementById('navbarSupportedContent').classList.remove('show');
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className='navbar-brand'>
            <h3>Draneb</h3>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <>
                <Link
                  to="/about"
                  style={{ textDecoration: 'none' }}
                  onClick={() => closeNavbar()}
                >
                  <span className='nav-link'>About</span>
                </Link>
              </>
            </li>
            <li className="nav-item">
              <>
                <Link
                  to="/cards"
                  style={{ textDecoration: 'none' }}
                  onClick={() => closeNavbar()}
                >
                  <span className='nav-link'>Cards</span>
                </Link>
              </>
            </li>
            <li className="nav-item">
              <>
                <Link
                  to="/products"
                  style={{ textDecoration: 'none' }}
                  onClick={() => closeNavbar()}
                >
                  <span className='nav-link'>Products</span>
                </Link>
              </>
            </li>
            <li className="nav-item">
              <>
                <Link
                  to="/projects"
                  style={{ textDecoration: 'none' }}
                  onClick={() => closeNavbar()}
                >
                  <span className='nav-link'>Projects</span>
                </Link>
              </>
            </li>
          </ul>
          <div className="navbar-nav ">

            <Link
              to="/contacts"
              style={{ textDecoration: 'none' }}
              onClick={() => closeNavbar()}
            >
              <button className="btn btn-primary" onClick={() => closeNavbar()}>
                Contact us
              </button>
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
