import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '../style/Notification.css';
import '../style/UserProfile.css';
import { FaBell, 
  FaLock, 
  FaCogs,
  FaQuestionCircle, 
  FaPen, 
  FaBars } from 'react-icons/fa';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.png';
import image6 from './images/image6.jpeg';
import image7 from './images/image7.jpg';

function Notification() {
    const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const unReadMessages = document.querySelectorAll(".unread");
    const unread = document.getElementById("notification");
    const markAll = document.getElementById("mark_all");

    setUnreadCount(unReadMessages.length);

    unReadMessages.forEach((message) => {
      message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread");
        setUnreadCount(newUnreadMessages.length);
      });
    });

    markAll.addEventListener("click", () => {
      unReadMessages.forEach((message) => {
        message.classList.remove("unread");
      });
      const newUnreadMessages = document.querySelectorAll(".unread");
      setUnreadCount(newUnreadMessages.length);
    });

    // Clean up event listeners on component unmount
    return () => {
      unReadMessages.forEach((message) => {
        message.removeEventListener("click", () => {
          message.classList.remove("unread");
          const newUnreadMessages = document.querySelectorAll(".unread");
          setUnreadCount(newUnreadMessages.length);
        });
      });
      markAll.removeEventListener("click", () => {
        unReadMessages.forEach((message) => {
          message.classList.remove("unread");
        });
        const newUnreadMessages = document.querySelectorAll(".unread");
        setUnreadCount(newUnreadMessages.length);
      });
    };
  }, []);
  return (
    <div >
      	<div id="menu-btn" className="fas fa-bars"><FaBars/></div>
			<nav className="navbar nav1" >
				<section className="navItems">

					<p className="setting">Settings</p>
					<ul className="items">
					    <li><i><FaPen /></i> Edit Profile</li>
						<li><i><FaBell/></i> Notification</li>
						<li><i><FaLock/></i> Security</li>
						<li><i><FaCogs/></i>Appearance</li>
						<li><i><FaQuestionCircle/></i> Help</li>

					</ul>
				</section>
			</nav>
      {/* ----Notification ---- */}
      
      <div className="body">
        
      <div className ="container">
                <header>
                    <div class="notif_box">
                        <h2 class ="title">Notification</h2>
                        <span id="notifications">{unreadCount}</span>
                    </div>
                    <p id ="mark_all">Mark all as read</p>
                </header>
                <main>
                    <div className="notif_card unread">
                       <img src={image1} alt="avatar" className='img'></img> 
                      <div className="description">
                        <p className="user_activity">
                          <strong>Mark Croos</strong> Type the message....
                        </p>
                        <p className="time">1m ago</p>
                      </div>
                    </div>
                    <div className="notif_card unread">
                    <img src={image2} alt="avatar" className='img'></img> 
                      <div className="description">
                        <p className="user_activity">
                          <strong>Angela Webber</strong> Type the message....
                        </p>
                        <p className="time">10m ago</p>
                      </div>
                    </div>
                    <div className="notif_card unread">
                    <img src={image3} alt="avatar" className='img'></img> 
                      <div className="description">
                        <p className="user_activity">
                          <strong>Jacob Fenando</strong> Type the message....
                        </p>
                        <p className="time">1 day ago</p>
                      </div>
                    </div>
                    <div className="notif_card">
                      <div className="message_card">
                      <img src={image4} alt="avatar" className='img'></img> 
                      <div className="description">
                        <p className="user_activity">
                          <strong>Jayathilaka Perera</strong> sent you a private message
                        </p>
                        <p className="time">5 days ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="message">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor
                      </p>
                    </div>
                    <div className="notif_card">
                    <img src={image5} alt="avatar" className='img'></img> 
                       <div className="description">
                        <p className="user_activity">
                        <strong>Hewage Dias</strong> sent you a private message
                        
                        </p>
                        <p className="time">2 weeks ago</p>
                       </div>
                       {/* <img src="" alt="avatar"></img> */}
                       </div>
                       <div className="notif_card">
                       <img src={image6} alt="avatar" className='img'></img> 
                        <div className="description">
                        <p className="user_activity">
                        <strong>Reina Croos</strong> sent you a private message
                          </p> 
                          <p className="time">3 weeks ago</p>
                        </div>
                       </div>
                       <div className="notif_card">
                       <img src={image7} alt="avatar" className='img'></img> 
                        <div className="description">
                        <p className="user_activity">
                        <strong>Selena Perera</strong> sent you a private message_card
                        <strong className="link">link</strong>
                          </p> 
                          <p className="time">1 month ago</p>
                        </div>
                       </div>
                    
                </main>
            </div>
            
            </div>
            
    </div>
  );
}

export default Notification;