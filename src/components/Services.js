import React from 'react';
import './style/Services.css';
import webDevelopment from "../images/webDevelopment.svg"
import softwareDevelopment from "../images/softwareDevelopment.svg"
import seo from "../images/seo.svg"
import graphicDesign from "../images/graphicDesign.svg"
import hosting from "../images/hosting.svg"
import learning from "../images/learning.svg"



const Services = () =>{
    return (
        <div>
            <div className='services__raw'>
                <div className='service__component'>
                    <img src={webDevelopment} alt={'web_development'}/>
                    <h3>WEB DEVELOPMENT</h3>
                    <p>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. We here at Texyto, provide you with web development services to build up your own platform for you to appear on the internet.</p>

                </div>
                <div className='service__component'>
                    <img src={softwareDevelopment} alt={'web_development'}/>
                    <h3>SOFTWARE DEVELOPMENT</h3>
                    <p>Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. We do software development here at Texyto. If you have a need for tailor-made software for your own business, or organization; please contact us at Texyto and we are here to assist you.</p>

                </div>
                <div className='service__component'>
                    <img src={seo} alt={'web_development'}/>
                    <h3>SEO OPTIMIZATION</h3>
                    <p>Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic. We carry out SEO optimization for your web pages to generate unique and organic web traffic for you to reach your targeted audience.</p>

                </div>
            </div>

            <div className='services__raw'>
                <div className='service__component'>
                    <img src={graphicDesign} alt={'graphic design'}/>
                    <h3>GRAPHIC DESIGN</h3>
                    <p>Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience. Our team of brainstorming designers will come up with new ideas for all your graphical needs.</p>

                </div>
                <div className='service__component'>
                    <img src={hosting} alt={'hosting'}/>
                    <h3>WEB HOSTING</h3>
                    <p>Hosting (also known as Web site hosting, Web hosting, and Webhosting) is the service of housing, serving, and maintaining files for one or more Web sites. More important than the computer space that is provided for Web site files is the fast connection to the Internet. Texyto provides you with web hosting services and 24/7 unmatched customer support for all your web hosting needs.</p>

                </div>
                <div className='service__component'>
                    <img src={learning} alt={'learning'}/>
                    <h3>FREE LEARNING</h3>
                    <p>Free learning is learning in which all choices are made by the student. Free learning is usually based on self-learning that is self-directed and self-paced. In free learning, there are no constraints of time, space, pace, method, direction, or subject matter. We here at Texyto, encourage free learning, and we provide multiple tutorials on various trades in IT.</p>

                </div>
            </div>
        
        </div>

    )

}

export default Services;
