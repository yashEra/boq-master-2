import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import './style/navbar.css'


    const Navbar = () =>{

        const [click, setClick] = useState(false)
        const mobileClick = () => setClick(!click)


        const [color, setColor] = useState(false)
        const changeColor = () =>{
            if (window.scrollY >= 90){
                setColor(true)
            }else{
                setColor(false)
            }
           
        }
        window.addEventListener('scroll', changeColor)

        return(
            <div className={color ? 'nav__color nav__color__bg': 'nav__color'}>
                <div className="navbar">
                    <div className="logo">
                        TEXYTO

                    </div>


                    <nav className={click ? "list active" : "list"}>

                        <ul className="listul">
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

                    </nav>
                    <div className="hamburger" onClick={mobileClick}>
                        {click ? (<FaTimes size={30} style={{color: '#c0c0c0'}}/>):
                        <FaBars />}

                    </div>

                    {/* <nav className={click ? 'mobile__menu active': 'mobile__menu'}>

                        <ul className="mobile__listul">
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

                    </nav> */}

                </div>
            </div>
        )
    }

  export default Navbar