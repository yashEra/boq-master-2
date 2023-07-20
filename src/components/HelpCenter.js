import React from "react";
import Navbar from "./Navbar";
import HeaderTitle from "./HeaderTitle";
import ContactInfo from "./ContactInfo";
import { FaMobile, FaEnvelopeSquare, FaSearchLocation } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className="nav-2">
        <Navbar />
      </div>
      <HeaderTitle
        heder="HELP CENTER"
        subheder="Find answers to your questions and get the support you need at our comprehensive Help Center. We are here to assist you every step of the way."
      />

      <Footer />
    </div>
  );
};

export default Contact;