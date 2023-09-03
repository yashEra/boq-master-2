import React from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.svg';
// import { FaExternalLinkAlt } from 'react-icons/fa';
import "../style_portfolio/QAPortfolio.css";
import image_q1 from "./assests/image_q1.jpg";
import image_q2 from "./assests/image_q2.jpg";
import image_q3 from "./assests/image_q3.jpg";
import image_q4 from "./assests/image_q4.jpg";
import image_q5 from "./assests/image_q5.jpg";
import image_q6 from "./assests/image_q6.jpg";
import NavBar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function App() {
  return (
    <div>
      <NavBar />

      <header className="headportfolio_q">
        <section className="portfolio_q">
          <h2 className="heading_q">
            Latest <span>Projects</span>
          </h2>

          <div className="portfolio-container_q">
            <div className="portfolio-box_q">
              <img src={image_q1} alt=""></img>
              <div className="portfolio-layer_q">
                <h4>Software Testing and Quality Assurance Projects</h4>
                <p>
                  These Software Testing and QA projects are vital components of
                  software development processes and help deliver high-quality,
                  reliable, and secure software products to end-users. The
                  specific project chosen depends on the organization's needs,
                  the software being developed, and the project's goals.{" "}
                </p>
                {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
              </div>
            </div>

            <div className="portfolio-box_q">
              <img src={image_q2} alt=""></img>
              <div className="portfolio-layer_q">
                <h4>Manufacturing Quality Assurance projects</h4>
                <p>
                  {" "}
                  Manufacturing Quality Assurance projects are critical for
                  upholding product quality, reducing defects, and enhancing the
                  overall efficiency of manufacturing operations. These
                  initiatives play a pivotal role in maintaining customer
                  satisfaction and competitiveness in the market. The choice of
                  projects may vary based on the specific needs and challenges
                  within a manufacturing organization.{" "}
                </p>
                {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
              </div>
            </div>

            <div className="portfolio-box_q">
              <img src={image_q3} alt=""></img>
              <div className="portfolio-layer_q">
                <h4>Environmental Testing and Compliance Projects</h4>
                <p>
                  man Environmental Testing and Compliance Project aligns an
                  organization's operations with environmental stewardship,
                  promoting long-term sustainability and responsible resource
                  management.{" "}
                </p>
                {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
              </div>
            </div>

            <div className="portfolio-box_q">
              <img src={image_q4} alt=""></img>
              <div className="portfolio-layer_q">
                <h4>QA for Modular Construction</h4>
                <p>
                  Modular construction is a modern and efficient approach to
                  building structures by assembling pre-manufactured modules or
                  components in a controlled factory environment. QA (Quality
                  Assurance) engineers play a critical role in ensuring the
                  quality, safety, and compliance of modular construction
                  projects.{" "}
                </p>
                {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
              </div>
            </div>

            <div className="portfolio-box_q">
              <img src={image_q5} alt=""></img>
              <div className="portfolio-layer_q">
                <h4>QA for Educational Institutions</h4>
                <p>
                  QA engineers in educational institutions ensure that
                  technology serves as an effective tool to facilitate learning,
                  administration, and communication, ultimately contributing to
                  the success and growth of these institutions.{" "}
                </p>
                {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
              </div>
            </div>

            <div className="portfolio-box_q">
              <img src={image_q6} alt=""></img>
              <div className="portfolio-layer_q">
                <h4>Green Building and Sustainability Projects</h4>
                <p>
                  Green Building Technology is an ever expanding world of new
                  green building products and procedures that enable us to
                  utilize natural resources and provide power and heating to our
                  homes. By using these green building technologies one can
                  reduce the carbon footprint and along with energy-efficient
                  products, can make the scheme or building, Carbon Neutral..{" "}
                </p>
                {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
              </div>
            </div>
          </div>
        </section>
      </header>
      <Footer />
    </div>
  );
}

export default App;
