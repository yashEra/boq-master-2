import React from 'react';
import Navbar from './Navbar';
import HeaderTitle from './HeaderTitle';
import ContactInfo from './ContactInfo';
import { FaMobile,FaEnvelopeSquare,FaSearchLocation } from 'react-icons/fa';
import './style/navbar.css'
// import './App.css';


const Contact = () =>{
    return(
    <div>
        <div className='nav-2'><Navbar/></div>
        <HeaderTitle heder='CONTACT US' subheder=''/>
        <ContactInfo icon={<FaMobile  width={12} height={12}  />} contactDetails = '+94 76 647 0618'/>
        <ContactInfo icon={<FaEnvelopeSquare  width={12} height={12}  />} contactDetails = 'contact@texyto.com'/>
        <ContactInfo icon={<FaSearchLocation  width={12} height={12}  />} contactDetails = 'Galle, Sri Lanka'/>

        
    </div>
  );
}

export default Contact;