import React, { useState } from "react";
import "../style_profile/ArchAbout.css";
import ArchDp from "../profile/assets/ArchDp.jpg";
import NavBar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Chatbox from "../../chatbox";

function ArchAbout() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div>
      <NavBar />
      <div className="About_a">
        <img className="engineer_dp_a" src={ArchDp} />

        <div className="description_a">
          At the prime of my career with over a decade of architectural
          excellence, I stand as a testament to the synergy of youthful passion
          and seasoned knowledge. Graduating with a Bachelor's in Architecture
          from a prestigious institution, my architectural journey commenced
          early, nurturing my innate creativity. My professional path led me
          through esteemed firms like sigma, where I played a pivotal role in
          shaping iconic cityscapes. Now, with a wealth of experience, I am
          uniquely positioned to fuse innovation and precision in crafting
          spaces that redefine modern living.
        </div>

        <div className="about-me_a">
          <span className="bit_a">A BIT ABOUT ME</span>
          <br />
          Who Am I ?
        </div>

        <div className="two-column-container_a">
          <div className="column_a">
            <section>
              <h2>Full name</h2>
              <p>[Your Name]</p>
            </section>

            <section>
              <h2>Email Address</h2>
              <p>[Your Email Address]</p>
            </section>

            <section>
              <h2>Address</h2>
              <p>[Your Address]</p>
            </section>
          </div>
          <div className="column_a">
            <section>
              <h2>Contact Number</h2>
              <p>[Your Contact Information]</p>
            </section>

            <section>
              <h2>Province</h2>
              <p>[Your Province]</p>
            </section>

            <section>
              <h2>City</h2>
              <p>[Your City]</p>
            </section>
            <button className="chat_button_a" onClick={openChat}>
              Click to Chat
            </button>
            <a href="/architect-portfolio">
              <button className="portfolio_button_a">Portfolio</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />

      {/* Conditionally render the ChatPage component as a modal */}
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded p-16 shadow-md z-50">
            <Chatbox />
            <button
              onClick={closeChat}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 mt-4"
            >
              Close Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArchAbout;
