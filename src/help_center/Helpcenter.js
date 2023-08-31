import React from "react";

import Sidebar from "./Sidebar";
import YouTubeThumbnail from "./YouTubeThumbnail";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import ProfessionalsCategory from "../services_platform/professionals/ProfessionalsCategory";

function Help_center() {
  return (
    <div className="Help_center">
      <NavBar />
      <HeaderTitle heder="Help Center" subheder="How to use BoQ Master" />

      <Sidebar />
      <YouTubeThumbnail />
      <ProfessionalsCategory />
      {/* <Footer /> */}
      {/* <Home />
      <Limitations />
      <Demo />
       */}
    </div>
  );
}
export default Help_center;
