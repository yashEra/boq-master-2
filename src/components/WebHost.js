import React from "react";
import "./style/WebHost.css"; 
import hosting from "../images/hosting.svg"

const WebHost = () => {
  return (
    <div className="container">
      <img src={hosting} alt="hosting" className="image" />
      <div className="content">
        <h1>Fast, Reliable, and Secure Hosting for Your Website</h1>
        <p>We offers web hosting services that are designed to provide you with the best possible experience for your website. Whether you're a blogger, small business owner, or a large corporation, our web hosting plans are built to meet your needs.

At Texyto, we use cutting-edge technology to ensure that your website is hosted on a fast and stable platform. Our web hosting plans come with top-tier data centers located around the world, so your website is always available and accessible to your visitors.

Security is also a top priority at Texyto. We use advanced security features to protect your website from hackers, malware, and other threats. Our web hosting plans come with free SSL certificates, which encrypt your website's data and ensure that your visitors' information is protected.

Our web hosting plans are designed to be flexible and scalable. You can choose a plan that suits your website's needs and easily upgrade as your website grows. We also offer easy-to-use control panels and site builders, making it simple for you to manage and customize your website.</p>
      </div>
    </div>
  );
};

export default WebHost;