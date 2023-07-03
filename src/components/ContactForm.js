import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style/ContactFrom.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7jqdlbd', 'template_tawyaqb', form.current, 'YMPa0BWvyFZL0bIoT')
      .then((result) => {
          console.log(result.text);
          console.log("massage send");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br/>
      <input className='text__area__style' type="text" name="user_name" /><br/>
      <label>Email</label><br/>
      <input className='text__area__style' type="email" name="user_email" /><br/>
      <label>Message</label><br/>
      <textarea className='text__area__style ' name="message" /><br/>
      <input className='submit__button' type="submit" value="Send" />
    </form>
  );
};
 
export default ContactUs;