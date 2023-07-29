import logo from './logo.svg';
import './App.css';
import './components/Profile.css';
import { FaBell, FaLock, FaCogs, FaQuestionCircle, FaPen, FaBars } from 'react-icons/fa';



function App() {
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

			<div className ="body">
			<div className = "container">
				<header>Edit Profile</header>
                 

				<form action ="#">
					<div className = "fields">
						<div className="input-field">
							<lable>First Name</lable>
							<input type ="text" placeholder=" Enter your First Name " required></input>
						</div>
						<div className="input-field">
							<lable>Last Name</lable>
							<input type ="text" placeholder="  Enter your Last Name " required></input>
						</div>
					</div>
					<div className = "l-fields">
					<div className="input-field">
							<lable>Email</lable>
							<input type ="text" placeholder=" Enter your Email " required></input>
						</div>
						
						</div>
						<div className = "l-fields">
					<div className="input-field">
							<lable>Address</lable>
							<input type ="text" placeholder=" Enter your Address " required></input>
						</div>
						
						</div>
						<div className = "l-fields">
					<div className="input-field">
							<lable>Contact Number</lable>
							<input type ="text" placeholder=" Enter your Contact Number " required></input>
						</div>
						
						</div>

						<div className = "fields">
						<div className="input-field">
							<lable>City</lable>
							<input type ="text" placeholder=" Enter your City " required></input>
						</div>
						<div className="input-field">
							<lable>Province</lable>
							<input type ="text" placeholder="  Enter your Province " required></input>
						</div>
					</div>

					<div className = "l-fields">
					<div className="input-field">
							<lable>Password</lable>
							<input type ="text" placeholder=" Enter your Password " required></input>
						</div>
						
						</div>
						

				</form>
			</div>
			</div>

			<script src="components/navbar.js"></script>
		</div>

		
	);
}

export default App;
