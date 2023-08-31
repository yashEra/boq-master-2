import React from "react";
import { Navbar } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SingleInputFild from "../../components/SingleInputFiels";

const WallView = () => {
    return ( 
    <div>
        <NavBar/>
    <SingleInputFild title="height" name="height" id="height" placeholder="enter wall width...."/>
        <Footer/>
        
    </div> 
    );
}
 
export default WallView;