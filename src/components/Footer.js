import React from 'react';
import './style/Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>About Us</h3>
          <p>We are a dynamic and dedicated team that specializes in delivering accurate and comprehensive Bills of Quantities. With our expertise and attention to detail, we ensure precise cost estimation and resource allocation for construction projects. </p>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <div className="social-media-icons">
          <ul className="quick__links__footer">
             <li>
                 <NavLink  to='/features'>Features</NavLink>
            </li>
            <li>
                 <NavLink  to='/help'>Help</NavLink>
            </li>
             <li>
                 <NavLink to='/about'>About Us</NavLink>
             </li>
            <li>
                <NavLink to='/contact'>Contact Us</NavLink>
            </li>
          </ul>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyrigh © 2023 | All Right Reseved. DEVELOPED BY GROUP 09</p>
      </div>
      <div class='footer__bottom'></div>
    </footer>
  );
};

export default Footer;
