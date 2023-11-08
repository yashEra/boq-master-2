import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.svg';
// import { FaExternalLinkAlt } from 'react-icons/fa';
import '../style_portfolio/EngPortfolio.css';
import image_e1 from './assests/image_e1.jpg';
import image_e2 from './assests/image_e2.jpg';
import image_e3 from './assests/image_e3.jpg';
import image_e4 from './assests/image_e4.jpg';
import image_e5 from './assests/image_e5.jpg';
import image_e6 from './assests/image_e6.jpg';
import NavBar from '../../../components/Navbar';
import Footer from '../../../components/Footer';


function App() {
  return (
    <div>
     <NavBar />
     <header className='headportfolio_e'>
      <section className='portfolio_e'>
	<h2 className='heading_e'>Latest <span>Projects</span></h2>

	<div className='portfolio-container_e'>
		<div className ='portfolio-box_e'>
    <img src={image_e1} alt=""  ></img>
    <div className='portfolio-layer_e'>
      <h4>Residential Housing Development</h4>
      <p>residential housing development is a multifaceted process that aims to create livable, sustainable, and safe communities for 
        individuals and families. It involves a combination of architectural design, infrastructure development, 
        and community planning to provide residents with comfortable and well-functioning homes. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e2} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Commercial Building Construction</h4>
      <p> commercial building construction involves a complex and collaborative effort among architects, engineers, construction professionals, and business owners. It aims to create functional, safe, 
        and aesthetically pleasing spaces that meet the diverse needs of businesses and their customers. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e3} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Mall and Shopping Center Development</h4>
      <p>mall and shopping center development is a multidisciplinary effort that relies on engineering expertise to create functional,
         safe, and sustainable spaces for retail and leisure activities. Engineers contribute to every stage of development, 
        from site selection and design to construction, maintenance, and future adaptability. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e4} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Modular Construction</h4>
      <p>Modular construction is a modern building technique that offers speed, efficiency, quality control, and sustainability benefits. It's an increasingly popular choice in the construction industry, 
        particularly for projects where time, cost, and quality are critical considerations. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e5} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Educational Institutions</h4>
      <p>educational institution construction is a complex and multifaceted process that aims to create safe, efficient, and inspiring learning environments. These projects require
         collaboration between architects, engineers, educators, and administrators to ensure that the facilities meet the educational institution's objectives and provide students with the 
         resources they need for a successful learning experience. </p>
        {/* <a href="#">
      <FaExternalLinkAlt className="bx bx-link-external" />
    </a> */}
      </div> 
          </div>

          <div className ='portfolio-box_e'>
    <img src={image_e6} alt="" ></img>
    <div className='portfolio-layer_e'>
      <h4>Green Building and Sustainability Projects</h4>
      <p>Green Building Technology is an ever expanding world of new green building products and procedures that enable us to utilize natural resources and provide power and heating to our homes. 
        By using these green building technologies one can reduce the carbon footprint and along with energy-efficient products, can make the scheme 
        or building, Carbon Neutral.. </p>
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
