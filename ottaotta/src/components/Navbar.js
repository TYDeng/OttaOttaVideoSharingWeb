// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/OttaOtta.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle sticky-top">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="OttaOtta" width="100" height="30" />
        </Link>

        {/* Collapse button for small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left side links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/live">Live</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/shorts">Shorts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/trending">Trending</Link>
            </li>
          </ul>

          {/* Search bar */}
          <div className="col-12 col-lg-6 mx-auto">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Find what you want" aria-label="Search" />
              <button type="button" className="btn btn-primary" data-mdb-ripple-init>
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* Right side links */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/profile"><i className="bi bi-person-circle"></i> Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/messages">Messages <span className="badge bg-info">4</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/history">History</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/collection">Collection</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/subscriptions">Subscriptions</Link>
            </li>
          </ul>

          {/* Upload button */}
          <Link to="/upload">
            <button className="btn btn-primary fs-5" type="button">Upload</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
