import logo from './logo.svg';
//import './App.css';
import './style/Doors.css';
import img11 from './assets/images/img11.jpg';
import img12 from './assets/images/img12.jpg';
import img13 from './assets/images/img13.jpg';
import img14 from './assets/images/img14.jpg';



function Doors() {
  return (
    <div className="App">
      

       
<section id="door" className="door">
  <h1 className="heading">DOOR</h1>
  <h3> Select Your Best Material For Your Future</h3>
  <div className="box-container">
    <div className="box">
      <div className="image">
        <img src={img11} alt="" />
      </div>

      <div className="info">
        <h3>Double Door</h3>
        <p>
          2m Teak Double Door
        </p>
        <p>Rs.180,000.00</p>
        <button class="button">Select</button>
      </div>
    </div>

    <div className="box">
      <div className="image">
      <img src={img12} alt="" />
      </div>

      <div className="info">
        <h3>Single Door </h3>
        <p>
        2m Teak Single Door
        </p>
        <p>Rs.80,000.00</p>
      </div>
      <button class="button">Select</button>
    </div>
     

    <div className="box">
      <div className="image">
      <img src={img13} alt="" />
      </div>

      <div className="info">
        <h3>Aluminium Door  </h3>
        <p>
        2m Aliminium Single Door 
        </p>
        <p>Rs.75,000.00</p>
      </div>
      <button class="button">Select</button>
    </div>

    <div className="box">
      <div className="image">
      <img src={img14} alt="" />
      </div>

      <div className="info">
        <h3>Steel Door  </h3>
        <p>
        2m Steel Single Door 
        </p>
        <p>Rs.150,000.00</p>
      </div>
      <button class="button">Select</button>
    </div>
  </div>
</section>
     
    </div>
  );
}

export default Doors;