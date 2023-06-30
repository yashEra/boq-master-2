import React from 'react';
import { Link } from "react-router-dom";
import './style/Footer.css'
import { FaMobile,FaEnvelopeSquare,FaSearchLocation } from 'react-icons/fa';
import logoNav from "../images/logoNav.png"
import Map from './Map';


const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='footer__components'>
                <div className='footer__column'>
                    <h2>About Us</h2>
                    <img src={logoNav} alt={'Footer Logo'}/>
                    <p>Texyto provides you with services in multiple disciplinaries in information technology such as Web hosting, learning tutorials, Graphic designing and a great portfolio of our work.</p>
                </div>
                <div className='footer__column'>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <p><FaMobile />:    +94 76 647 0618</p>
                        </li>
                        <li>
                        <p><FaEnvelopeSquare />:    contact@texyto.com</p>

                        </li>
                        <li>
                        <p><FaSearchLocation />:    Galle, Sri Lanka</p>

                        </li>
                        
                    </ul>
                </div>
                <div className='footer__column'>
                    <h2>Quick Links</h2>
                    <div className='footer__menu'>

                        <ul className="footer__listul">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About Us</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='fotter__bar'>
                <p>Copyright © 2023 texyto.com. All Rights Reserved.</p>

            </div>
            <div>
                <Map/>
            </div>
        </div>
     );
}
 
export default Footer;

