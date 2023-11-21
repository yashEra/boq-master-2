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
import ArchPortfolio from "./services_platform/portfolioes/portfolio/ArchiPortfolio"
import EngPortfolio from "./services_platform/portfolioes/portfolio/EngPortfolio";
import QSPortfolio from "./services_platform/portfolioes/portfolio/QSPortfolio";
import QSList from "./services_platform/profiles/profile/QSList"
import EngList from "./services_platform/profiles/profile/EngineerList"
import ArchList from "./services_platform/profiles/profile/ArchitectList"
import RawMaterialsTable from "./boq_generator/RawMaterialDatabase";
import CostEstimationTool from "./boq_generator/CostEstimationTool";
import PreDefineHome from "./boq_generator/pre-define-designs/PreDefineHome";
import ChatBox from "./services_platform/chatbox";
import Doors from "./boq_generator/pre-define-designs/Doors";
import Floor from "./boq_generator/pre-define-designs/Floor";
import Roofs from "./boq_generator/pre-define-designs/Roof";
import Windows from "./boq_generator/pre-define-designs/Window";
import BoQFinal from './boq_generator/boq-final/summary';
import WindowsView from "./boq_generator/window/Windows";
import DoorView from "./boq_generator/door/Door";
import BOQMain from "./boq_generator/boq-global";
import ProjectForm from "./services_platform/portfolioes/portfolio/PortfolioForm";
import { ArchiList } from "./services_platform/professionals/ArchiList";
import ArchitectProfile from "./services_platform/professionals/ArchitectProfile";
import AdminHome from "./admin/AdminPanel";


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
      <Route path="/boq-wizard" element={<BOQMain />} />
      <Route path="/boq-walls" element={<WallView />} />
      <Route path="/boq-summary" element={<BoQFinal/>} />
      <Route path="/help-center" element={<Help_center />} />
      <Route path="/pro-home" element={<ProfessionalsCategory />} />
      <Route path="/about-architect" element={<AboutArchitect />} />
      <Route path="/about-qs" element={<AboutQS />} />
      <Route path="/about-engineer" element={<AboutEngineer />} />
      <Route path="/architect-pro" element={<ArchitectPro />} />
      <Route path="/qs-pro" element={<QSPro />} />
      <Route path="/eng-pro" element={<EngPro />} />
      <Route path="/boq-stairs" element={<StairsView />} />
      <Route path="/boq-slab" element={<SlabView />} />
      <Route path="/boq-columns" element={<ColumnView />} />
      <Route path="/boq-tiebeam" element={<TiebeamView />} />
      <Route path="/boq-singleunitcal" element={<SingleUnitCalculator />} /><Route path="/architect-portfolio" element={<ArchPortfolio />} />
      <Route path="/eng-portfolio" element={<EngPortfolio />} />
      <Route path="/qs-portfolio" element={<QSPortfolio />} />
      <Route path="/qs-list" element={<QSList />} />
      <Route path="/engineer-list" element={<EngList />} />
      <Route path="/architect-list" element={<ArchList />} />
      <Route path="/material-price-list" element={<RawMaterialsTable />} />
      <Route path="/cost-estimation" element={<CostEstimationTool />} />
      <Route path="/pre-define" element={<PreDefineHome />} />
      <Route path="/chat-box" element={<ChatBox />} />
      <Route path="/door" element={<Doors />} />
      <Route path="/floor" element={<Floor />} />
      <Route path="/roof" element={<Roofs />} />
      <Route path="/window" element={<Windows />} />
      <Route path="/boq-window" element={<WindowsView />} />
      <Route path="/boq-door" element={<DoorView />} />
      <Route path="/boq-form" element={<ProjectForm/>} />
      <Route path="/archiList" element={<ArchiList/>} />
      <Route path="/ar-pro/:architectId" element={<ArchitectProfile />} />
      <Route path="/adminz-boq-mz" element={<AdminHome />} />

    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
