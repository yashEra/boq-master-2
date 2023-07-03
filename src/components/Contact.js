import React from 'react';
import Navbar from './Navbar';
import HeaderTitle from './HeaderTitle';
import ContactInfo from './ContactInfo';
import { FaMobile,FaEnvelopeSquare,FaSearchLocation } from 'react-icons/fa';
import './style/navbar.css'
import './style/Contact.css'
import ContactForm from './ContactForm';
// import './App.css';
import Footer from './Footer';


const Contact = () =>{
    return(
    <div>
        <div className='nav-2'><Navbar/></div>
        <HeaderTitle heder='CONTACT US' subheder="Get in touch with us - We are here to help!"/>
          <div className='main__container'>
          <div className='contact__info'>
            <ContactInfo icon={<FaMobile  width={12} height={12}  />} contactDetails = '+94 12 345 6789'/>
            <ContactInfo icon={<FaEnvelopeSquare  width={12} height={12}  />} contactDetails = 'contact@boqmaster.com'/>
            <ContactInfo icon={<FaSearchLocation  width={12} height={12}  />} contactDetails = 'Galle, Sri Lanka'/>
          </div>
          <div className='contact__form__container'><ContactForm/></div>
        </div>
        <Footer/>
    </div>
  );
}

export default Contact;