import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container-fluid px-4 mx-0">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <p className="mb-1">
              <i className="bi bi-geo-alt text-danger me-2"></i>Address
            </p>
            <p className="mb-0">
              A108 Adam Street
              <br />
              New York, NY 535022
            </p>
          </div>
          {/* Contact Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <p className="mb-1">
              <i className="bi bi-telephone text-danger me-2"></i>Contact
            </p>
            <p className="mb-0">
              Phone: +1 5589 55488 55
              <br />
              Email: info@example.com
            </p>
          </div>
          {/* Opening Hours Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <p className="mb-1">
              <i className="bi bi-clock text-danger me-2"></i>Opening Hours
            </p>
            <p className="mb-0">
              Mon-Sat: 11AM - 23PM
              <br />
              Sunday: Closed
            </p>
          </div>
          {/* Social Icons Section */}
          <div className="col-md-3">
            <p className="mb-2">Follow Us</p>
            <div className="footer-social-icons">
              <a href="#" className="btn btn-dark rounded-circle p-1 me-2 social-icon">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-dark rounded-circle p-1 me-2 social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-dark rounded-circle p-1 me-2 social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-dark rounded-circle p-1 social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <hr className="my-4" />
        {/* Footer Bottom Section */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="small mb-0">
              &copy; Copyright Yummy. All Rights Reserved
            </p>
            <p className="small mb-0">
              Designed by <span className="text-danger">BootstrapMade</span>
            </p>
          </div>
        </div>
      </div>
      {/* Scroll-to-Top Button */}
      <NavLink to="/" className="scroll-to-top">
        <i className="bi bi-arrow-up"></i>
      </NavLink>
    </footer>
  );
}

export default Footer;
