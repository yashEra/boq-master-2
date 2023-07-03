import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import './style/navbar.css'
import ButtonOutline from './ButtonOutline';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from '../images/facebook.svg'
import linkedin from '../images/linkedin.svg'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';


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

        const navLinkStyles = ({ isActive , isHover})=>{
            return{
                fontWeight: isActive ? '900':'normal',
                scale: isActive ? '1.2':'1',
                transform: isActive ? 'scale(1.2)':'scale(1)',
                fontSize: isActive ? '110%':'100%',
                transform: isActive ? 'translate(0px,-4px)':'translate(0px,0px)'

            }
        }
        window.addEventListener('scroll', changeColor)

        return(
            <div className={color ? 'nav__color nav__color__bg': 'nav__color'}>
                <div className="navbar">
                    <div className="logo">
                        BoQMaster
                    </div>
                    <nav className={click ? "list active__nav" : "list"}>

                        <ul className="listul">
                            <li>
                                <NavLink  style={navLinkStyles} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink  style={navLinkStyles} to='/about'>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink  style={navLinkStyles} to='/contact'>Contact Us</NavLink>
                            </li>
                        </ul>

                    </nav>
                    <div className='nav-button'>
                        <img src={facebook} alt={'facebook'}/>
                        <img src={linkedin} alt={'linkedin'}/>

                        <ButtonOutline text='Login/Signup' link="#" />
                    </div>
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

  export default Navbar;