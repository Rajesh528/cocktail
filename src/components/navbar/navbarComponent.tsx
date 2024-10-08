import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-bootstrap-icons';

let Navbar:React.FC = ()=>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Brand</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/customers">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/customers">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/customers">Customers</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Logout</a>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
