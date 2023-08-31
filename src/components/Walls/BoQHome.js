import "./BoQHome.css";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
// import Footer from "./Footer";
import { Feedback } from "@mui/icons-material";
import NavBar from "../Navbar";
import Footer from "../Footer";

function BoqHome() {
  return (
    <div className="boq__main">
      <NavBar />
      <Home />
      <About />
      {/* <Work /> */}
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default BoqHome;
