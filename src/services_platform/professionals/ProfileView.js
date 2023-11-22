import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ProfileView = () => {
  const [professionals, setProfessionals] = useState([]);
  const navigate = useNavigate();
  const { architectId } = useParams();
  console.log("architectId from URL:", architectId);

  const [architect, setArchitect] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:8080/Models/Process/getArchitect.php?id=${architectId}`)
      .then((response) => response.json())
      .then((data) => setArchitect(data))
      .catch((error) => console.error('Error fetching architect data:', error));
  }, [architectId]);

    const handleViewProfile = (architectId) => {
    navigate(`/portfolio/${architectId}`);
  };


  if (!architect) {
    return <div>Loading...</div>;
  }
  // {architect.pro_pic}
  return (
    <div>
      <NavBar />
      <div className=" bg-[#292240] flex items-center justify-center min-h-screen text-[#9e9cb6]">
        <section className="w-full max-w-[430px] relative bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden">
          <div className="absolute text-[#231f39] bg-yellow-400 rounded-[4px] top-6 left-6 px-2 py-1 text-sm font-bold roll-in-blurred-right">
            {architect.accountType}
          </div>
<img
  src={"http://localhost:3000/assest/" + architect.pro_pic}
  className="rounded-full w-[200px]  h-[200px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
  alt="Profile"
/>
          <h1 className="text-xl font-bold text-center">{architect.firstName} {architect.lastName}</h1>
          <small className="block my-1 text-center">NEW YORK</small>
          <p className="mt-5 text-center">{architect.proType}</p>
          <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
            <button className="flex-1 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]" onClick={() => handleViewProfile(architect.id)}>View Portfolio</button>
            <button className="flex-1 border border-[#231f39] text-[#ffffff] rounded-[4px] py-3 transition-all duration-150 ease-in hover:bg-[#472e99]  hover:text-white">{architect.email}</button>
          </div>
          <div className="bg-[#1e1a36]/70 p-4 text-sm font-semibold backdrop-blur-sm">
            <p>About Me</p>
            <ul className="flex mt-4 flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[#2f2a47] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">

              <li>{architect.description}</li>
              {/* <li>HTML</li>
              <li>CSS</li>
              <li>Back End Development</li>
              <li>TailwindCSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>SEO</li> */}
            </ul>
          </div>
        </section>
      </div>
      <Footer />

    </div>

  );
};

export default ProfileView;
