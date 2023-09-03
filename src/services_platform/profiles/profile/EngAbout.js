import React from "react";
import "../style_profile/EngAbout.css";
import EngDp from "../profile/assets/EngDp.png";

function EngAbout() {
  return (
    <div className="About_e">
      <img className="engineer_dp_e" src={EngDp} />

      <div className="description_e">
        With over 15 years of experience in civil engineering, I hold a Bachelor
        of Science in Civil Engineering from Elmwood University. My career began
        at Horizon Engineering, where I worked on transformative infrastructure
        projects. Later, at Evergreen Constructors, I focused on sustainable
        building practices, achieving LEED Platinum certification. Today, I am a
        dedicated civil engineer, committed to innovation and excellence in the
        field.
      </div>

      <div className="about-me_e">
        <span className="bit_e">A BIT ABOUT ME</span>
        <br />
        Who Am I ?
      </div>

      <div className="two-column-container_e">
        <div className="column_e">
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
        <div className="column_e">
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
          <button className="chat_button_e">Click to Chat</button>
          <a href="/eng-portfolio"><button className="portfolio_button_e">Portfolio</button></a>
        </div>
      </div>
    </div>
  );
}

export default EngAbout;
