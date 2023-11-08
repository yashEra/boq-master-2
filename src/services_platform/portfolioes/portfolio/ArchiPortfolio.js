import React from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.svg';
// import { FaExternalLinkAlt } from 'react-icons/fa';
import "../style_portfolio/ArchiPortfolio.css";
import image_a1 from "./assests/image_a1.jpg";
import image_a2 from "./assests/image_a2.jpg";
import image_a3 from "./assests/image_a3.jpg";
import image_a4 from "./assests/image_a4.jpg";
import image_a5 from "./assests/image_a5.jpg";
import image_a6 from "./assests/image_a6.jpg";
import NavBar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <header className="headportfolio_a">
          <section className="portfolio_a">
            <h2 className="heading_a">
              Latest <span>Projects</span>
            </h2>

            <div className="portfolio-container_a">
              <div className="portfolio-box_a">
                <img src={image_a1} alt=""></img>
                <div className="portfolio-layer_a">
                  <h4>Landscape Architecture</h4>
                  <p>
                    Landscape architecture is a multifaceted field that involves
                    the planning, design, and management of outdoor spaces, with
                    a focus on creating functional, aesthetically pleasing, and
                    sustainable environments{" "}
                  </p>
                  {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
                </div>
              </div>

              <div className="portfolio-box_a">
                <img src={image_a2} alt=""></img>
                <div className="portfolio-layer_a">
                  <h4>Interior Design</h4>
                  <p>
                    {" "}
                    Interior design architecture is a specialized discipline
                    within the broader field of architecture that focuses on the
                    detailed planning, design, and enhancement of interior
                    spaces. It marries the principles of architectural design
                    with a keen understanding of human behavior, aesthetics, and
                    functionality to create captivating indoor environments.{" "}
                  </p>
                  {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
                </div>
              </div>

              <div className="portfolio-box_a">
                <img src={image_a3} alt=""></img>
                <div className="portfolio-layer_a">
                  <h4>Cultural and Religious Buildings</h4>
                  <p>
                    Cultural and religious buildings architecture is a testament
                    to the power of architecture to foster a sense of community,
                    spirituality, and cultural identity. Architects in this
                    field have the unique privilege of shaping spaces that
                    resonate with the beliefs and values of diverse societies
                    while leaving a lasting architectural legacy that transcends
                    time.{" "}
                  </p>
                  {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
                </div>
              </div>

              <div className="portfolio-box_a">
                <img src={image_a4} alt=""></img>
                <div className="portfolio-layer_a">
                  <h4>Parks and recreational areas Architecture</h4>
                  <p>
                    Modular construction is a modern and efficient approach to
                    building structures by assembling pre-manufactured modules
                    or components in a controlled factory environment. QA
                    (Quality Assurance) engineers play a critical role in
                    ensuring the quality, safety, and compliance of modular
                    construction projects.{" "}
                  </p>
                  {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
                </div>
              </div>

              <div className="portfolio-box_a">
                <img src={image_a5} alt=""></img>
                <div className="portfolio-layer_a">
                  <h4>Hotels and resorts Architecture</h4>
                  <p>
                    Hotels and resorts architecture is a dynamic field that
                    evolves with changing travel trends and guest expectations.
                    Whether it's a cozy boutique hotel in a bustling city or a
                    luxurious beachfront resort, the architecture of these
                    establishments plays a pivotal role in shaping the overall
                    guest experience.{" "}
                  </p>
                  {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
                </div>
              </div>

              <div className="portfolio-box_a">
                <img src={image_a6} alt=""></img>
                <div className="portfolio-layer_a">
                  <h4>Single-family homes Architecture</h4>
                  <p>
                    Single-family homes architecture celebrates the diversity of
                    residential design, ranging from cozy cottages to spacious
                    estates. These homes are the embodiment of a family's dreams
                    and aspirations, and architects play a vital role in
                    bringing those dreams to life through thoughtful and
                    personalized design.{" "}
                  </p>
                  {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
