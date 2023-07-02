import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
            <Routes>
              <Route path='/'element={<App/>}/>
              <Route path='/features'element={<Features/>}/>
              <Route path='/about'element={<About/>}/>
              <Route path='/contact'element={<Contact/>}/>
            </Routes>
          </Router>
            

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
