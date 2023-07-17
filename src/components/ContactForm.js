import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import "./style/ContactFrom.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7jqdlbd",
        "template_tawyaqb",
        form.current,
        "YMPa0BWvyFZL0bIoT"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("massage send");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div >
      <div class="container">
        <div class="top">
          <header class="header_1">Drop Your Words!</header>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div class="input-field">
            <input
              className="input"
              type="text"
              name="user_name"
              placeholder="Name"
            />
          </div>

          <div class="input-field">
            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="Email"
            />
          </div>
          <div class="input-field">
            <textarea className="input" name="message" placeholder="Message" />
          </div>

          <div class="input-field">
            <input
              className="submit"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
