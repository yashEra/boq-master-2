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
import ProfessionalsCategory from "./services_platform/professionals/ProfessionalsCategory";
import AboutArchitect from "./services_platform/profiles/profile/ArchAbout";
import AboutQS from"./services_platform/profiles/profile/QSAbout";
import AboutEngineer from "./services_platform/profiles/profile/EngAbout";
import ArchitectPro from "./services_platform/profiles/profile/ArchMainProfile";
import QSPro from "./services_platform/profiles/profile/QSMainProfile";
import EngPro from "./services_platform/profiles/profile/EngMainProfile";
import StairsView from "./boq_generator/stairs/StairsView";
import SlabView from "./boq_generator/slabs/SlabView";
import ColumnView from "./boq_generator/columns/ColumnView";
import TiebeamView from "./boq_generator/tiebeam/TiebeamView";
import SingleUnitCalculator from "./boq_generator/SingleUnitCalculator";



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
      <Route path="/pro-home" element={<ProfessionalsCategory />} />
      <Route path="/about-architect" element={<AboutArchitect />} />
      <Route path="/aboutQS" element={<AboutQS />} />
      <Route path="/about-engineer" element={<AboutEngineer />} />
      <Route path="/architect-pro" element={<ArchitectPro />} />
      <Route path="/QS-pro" element={<QSPro />} />
      <Route path="/eng-pro" element={<EngPro />} />
      <Route path="/boq-stairs" element={<StairsView />} />
      <Route path="/boq-slab" element={<SlabView />} />
      <Route path="/boq-columns" element={<ColumnView />} />
      <Route path="/boq-tiebeam" element={<TiebeamView />} />
      <Route path="/boq-singleunitcal" element={<SingleUnitCalculator />} />

    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
