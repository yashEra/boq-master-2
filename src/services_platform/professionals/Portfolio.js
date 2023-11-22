import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('ID:', id);

  useEffect(() => {
    // Fetch Portfolios based on Professional ID
    fetch(`http://localhost:8080/Models/Process/portfolioList.php?pro_id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setPortfolios(data);
        } else {
          console.error('Invalid API response format:', data);
        }
      })
      .catch((error) => console.error('Error fetching portfolios:', error));
  }, [id]);

  const handleViewProfile = (architectId) => {
    navigate(`/ar-pro/${architectId}`);
  };

  return (
    <div>
      <NavBar />
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h1 className="text-2xl font-bold text-gray-900">Portfolios</h1>
            
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
              {portfolios.map((portfolio) => (
                <div key={portfolio.id} className='flex flex-col items-center justify-center'>
                  <div>
                    <img
                      src={`http://localhost:3000/assest/${portfolio.image1}`} // Adjust image source as needed
                      className='rounded-full w-[200px] h-[200px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd'
                      alt={`Portfolio ${portfolio.project_name}`}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h1 className="mt-6 text-gray-500 text-center">
                      <span className="absolute inset-0" />
                      {portfolio.project_name}
                    </h1>
                    <p className="text-base font-semibold text-gray-900 text-center">{portfolio.project_discription}</p>
                  </div>
                  <div>
                    <button
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => handleViewProfile(portfolio.pro_id)}
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
