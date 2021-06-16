import React from 'react';
import {Link} from 'react-router-dom';
import Bygoogle from './Bygoogle';
import firebase from 'firebase/app'
import 'firebase/auth'
//import  ByFacebook  from './ByFacebook';



export const Navbar = () => 
(
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/home">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="aboutus">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="contactus">Contact Us</Link>
              </li>
              <li className="nav-item navchat">
                <Link className="nav-link active" aria-current="page" to="/chat">Chat</Link>
            </li>
            </ul>
          </div>
          <Bygoogle/>



        </div>
        
      </nav>


)

