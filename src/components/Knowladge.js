import React from "react";
import "./style/Knowladge.css"
import knowladgeMain from "../images/knowladgeMain.svg"

const Knowladge = () => {
    return ( 
        <div className="knowladge__container">
            <div className="Knowladge__component">
                <h1>In the 21st Century, Knowing your Way Around Technology is the Key to Success.</h1>
                <p>Information technology (IT) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. Typically, IT is used in the context of business operations, as opposed to technology used for personal or entertainment purposes. The commercial use of IT encompasses both computer technology and telecommunications.<br/><br/>
                    Texyto provides you with services in multiple disciplinaries in information technology such as Web hosting, learning tutorials, Graphic designing and a great portfolio of our work.</p>

            </div>
            <div className="Knowladge__component">
            <img src={knowladgeMain} alt={knowladgeMain}/>

            </div>
        </div>
     );
}
 
export default Knowladge;