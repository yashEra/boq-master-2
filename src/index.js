import React from "react";
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Login from './components/Login';
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import HelpCenter from "./components/HelpCenter";
import UserProfile from "./components/user_profile/UserProfile";
import BoqHome from "./boq_generator/BoQHome";
import Work from "./boq_generator/Work";
import WallView from "./boq_generator/walls/WallView";
import Help_center from "./help_center/Helpcenter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/sevices" element={<Services />} />
      <Route path="/helpcenter" element={<HelpCenter />} />
      <Route path="/myprofile" element={<UserProfile />} />
      <Route path="/boq-home" element={<BoqHome />} />
      <Route path="/start-boq" element={<Work />} />
      <Route path="/boq-walls" element={<WallView />} />
      <Route path="/help-center" element={<Help_center />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
