import logo from './logo.svg';
//import './App.css';
import './style/Roof.css';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';

function Roofs() {
  return (
    <div className="App">
      

       
<section id="roof" className="roof">
  <h1 className="heading">ROOF</h1>
  <h3> Select Your Best Material For Your Future</h3>
  <div className="box-container">
    <div className="box">
      <div className="image">
        <img src={img3} alt="" />
      </div>

      <div className="info">
        <h3>Rhino Cement Roofing sheet</h3>
        <p>
          1750mm Rhino Cement Roofing sheet
        </p>
        <p>Rs.4,000.00</p>
        <button class="button">Select</button>
      </div>
    </div>

    <div className="box">
      <div className="image">
      <img src={img4} alt="" />
      </div>

      <div className="info">
        <h3>Anton Armor Roofing Sheet </h3>
        <p>
        8 Feet x 3 Feet Red color Armor sheet
        </p>
        <p>Rs.13,000.00</p>
      </div>
      <button class="button">Select</button>
    </div>
     

    <div className="box">
      <div className="image">
      <img src={img5} alt="" />
      </div>

      <div className="info">
        <h3>Roof Max Roofing Sheet  </h3>
        <p>
        7 Feet x 3 Feet Green color  
        </p>
        <p>Rs.16,000.00</p>
      </div>
      <button class="button">Select</button>
    </div>

    <div className="box">
      <div className="image">
      <img src={img6} alt="" />
      </div>

      <div className="info">
        <h3>AC Terres Roofing Sheet  </h3>
        <p>
        1700mm Blue color AC Terres Roofing Sheet
        </p>
        <p>Rs.10,000.00</p>
      </div>
      <button class="button">Select</button>
    </div>
  </div>
</section>
     
    </div>
  );
}

export default Roofs;



