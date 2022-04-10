import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-nav pt-1 ">
        <div className="container justify-content-between p-2 header-container ">
            <a className="navbar-brand" href="/">
                <img src="images/logo.png " className="img-fluid " alt="Brand"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                <ul className="navbar-nav ml-auto mr-4 mb-2 mb-lg-0 ">
                    <li className="nav-item px-2">
                        <a className="nav-link " href="#our-service">Our Service </a>
                    </li>
                    <li className="nav-item px-2 ">
                        <a className="nav-link " href="#why-us">Why Us</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link " href="#testimonial ">Testimonial</a>
                    </li>
                    <li className="nav-item px-2">
                        <a className="nav-link " href="#faq">FAQ</a>
                    </li>
                </ul>
                <button className="btn btn-success ms-3" type="submit ">Register</button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar