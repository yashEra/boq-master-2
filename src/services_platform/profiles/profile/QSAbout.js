import React from 'react'
import "../style_profile/QSAbout.css";
import QSDp from "../profile/assets/QSdp.jpg"

function QSAbout() {
  return (
    <div className="About">
      <img className="engineer_dp" src={QSDp} />

      <div className="description">
        With over a decade of experience as a Quantity Surveyor, I bring a
        unique blend of youthful energy and seasoned expertise to every project.
        Armed with a Bachelor's degree in Quantity Surveying from a renowned
        institution, my journey began early, shaping my proficiency in cost
        estimation and project financial management. My professional path led me
        through esteemed firms like QRtech, where I contributed
        significantly to optimizing project budgets.
      </div>

      <div className="about-me">
        <span className="bit">A BIT ABOUT ME</span>
        <br />
        Who Am I ?
      </div>

      <div className="two-column-container">
        <div className="column">
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
        <div className="column">
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
          <button className="chat_button">Click to Chat</button>
        </div>
      </div>
    </div>
  );
}

export default QSAbout
