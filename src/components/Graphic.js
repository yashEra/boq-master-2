import React from "react";
import GraphicMain from '../images/GraphicMain.jpg'
import './style/Graphic.css'

const GraphicSolution = () => {
    return ( 
        <div className="graphic__container">
            <div className="graphic__component"><img src={GraphicMain} alt="Grahpic mainImage"/></div>
            <div className="graphic__component">
                <h1>We provide all graphic solutions to grow your business</h1>
                <h2>From Good to Great.</h2>
                <p>In today's digital age, businesses must have a strong online presence to compete effectively in the market. With the increasing importance of digital media, it is essential for companies to have a solid foundation in digital media to achieve success. This is where graphic design comes in, as it is an integral part of creating a strong brand identity and conveying the message of the company to its target audience.

                    Good graphic design solutions can significantly impact a business's success by improving brand recognition, attracting new customers, and creating a positive impression of the company in the minds of existing and potential customers. Whether it's designing a logo, creating marketing materials, or developing a website, good graphic design plays a crucial role in communicating a business's values, products, and services effectively.

                    At our company, we provide world-class graphic design solutions to help businesses achieve their goals in the digital marketplace. Our team of expert graphic designers can help create a unique and compelling brand identity that resonates with your target audience. With our help, your business can stand out in the digital landscape and achieve the success you deserve.</p><br/>
                <h4>Graphic Design</h4>
                <h4>Video Editing</h4>
                <h4>Motion Graphic Design</h4>
                <h4>UI/UX Design</h4>
            </div>

        </div>
     );
}
 
export default GraphicSolution;