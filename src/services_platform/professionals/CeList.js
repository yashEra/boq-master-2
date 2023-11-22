import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const CeList = () => {
  const [professionals, setProfessionals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/Models/Process/ceList.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProfessionals(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleViewProfile = (architectId) => {
    navigate(`/ar-pro/${architectId}`);
  };

  return (
    <div>
      <NavBar />
      <div className="">
        <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h1 className="text-2xl font-bold text-gray-900">Civil Engineer Professionals</h1>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
              {professionals.map((professional) => (
                <div key={professional.id}  className='flex flex-col items-center justify-center'>
                  <div >
                    <img
                      src={"http://localhost:3000/assest/" + professional.pro_pic}
                      className='rounded-full w-[200px]  h-[200px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd'
                      alt={`Profile of ${professional.firstName} ${professional.lastName}`}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div >
                  <h1 className="mt-6  text-gray-500 text-center">
                    <span className="absolute inset-0" />
                    {professional.firstName} {professional.lastName}
                  </h1>
                  <p className="text-base font-semibold text-gray-900 text-center">{professional.description}</p>
                  </div>
                  <div >
                  <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                    // style={{ zIndex: 999 }}
                    onClick={() => handleViewProfile(professional.id)}
                  >
                    View Profile
                  </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
