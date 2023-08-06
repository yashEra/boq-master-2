import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Feedback } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Feedback/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;