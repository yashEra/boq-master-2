import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Navbar';
import Footer from '../Footer';

export default function ClientProfile() {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const handleViewProfile = (architectId) => {
    navigate(`/portfolio/${architectId}`);
  };

  useEffect(() => {
    // Get user ID from session storage
    const userId = sessionStorage.getItem('userId');

    // Make API call to fetch user profile data
    axios.get(`http://localhost:8080/Models/Process/getClient.php?id=${userId}`)
      .then(response => {
        // Update state with fetched data
        setProfileData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user profile data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{paddingTop:'80px'}}>
      <div className=" bg-[#292240] flex items-center justify-center min-h-screen text-[#9e9cb6]">
        <section className="w-full max-w-[430px] relative bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden">
          <div className="absolute text-[#231f39] bg-yellow-400 rounded-[4px] top-6 left-6 px-2 py-1 text-sm font-bold roll-in-blurred-right">
            {profileData.accountType}
          </div>
          <img
            src={"http://localhost:3000/assest/" + profileData.pro_pic}
            className="rounded-full w-[200px]  h-[200px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
            alt="Profile"
          />
          <h1 className="text-xl font-bold text-center">{profileData.firstName} {profileData.lastName}</h1>
          {/* <small className="block my-1 text-center">NEW YORK</small> */}
          <p className="mt-5 text-center">{profileData.proType}</p>
          <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
            <button className="flex-1 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]" onClick={() => handleViewProfile(profileData.id)}>View Portfolio</button>
            <button className="flex-1 border border-[#231f39] text-[#ffffff] rounded-[4px] py-3 transition-all duration-150 ease-in hover:bg-[#472e99]  hover:text-white">{profileData.email}</button>
          </div>
          <div className="bg-[#1e1a36]/70 p-4 text-sm font-semibold backdrop-blur-sm">
            <p>About Me</p>
            <ul className="flex mt-4 flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[#2f2a47] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">

              <li><h2>{profileData.userName}'s Profile</h2></li>
              <li>{profileData.description}</li>
              <li>Phone Number: {profileData.phoneNumber}</li>
            </ul>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  );
}
