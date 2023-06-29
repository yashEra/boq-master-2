import React from "react";
import './style/ContactInfo.css'

const ContactInfo = (props) => {
    return ( 
        <div className="contact__infor__container">
            <div className="icon">
                {props.icon}
            </div>
            <div>
                <h4>{props.contactDetails}</h4>
            </div>

        </div>
     );
}
 
export default ContactInfo;