import './App.css';
import NavBar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import headerImage from './images/headerImage.svg'
import {FaArrowRight} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
        <div className='heder'>
          <NavBar />
          <div className='heder_cont'>
            <div className='hederText'>

              <h2>PUTTING YOU & YOURS TOGETHER</h2>
              <h1 className='maintext'>BEFORE YOU <br/>BUILD</h1>
              <p>BoQ providing a detailed fact of quantities, specifications, and costs of materials needed for a project.</p>
              <button type='button' className='heder__button'>Let's Talk   <FaArrowRight /></button> 

            </div>
            <div className='heder-image'>

              <img src={headerImage} alt={'heder'}/>
              
            </div>
            </div>
          </div>
      {/* <img src={headerImage} alt={'heder'}/> */}
    </div>
  );
}

export default App;
