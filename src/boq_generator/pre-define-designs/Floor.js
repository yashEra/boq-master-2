import React from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Floor() {
  return (
    <div>
      <NavBar />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <section id="floor" className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">FLOOR</h1>
        <h3 className="text-lg mb-4">Select Your Best Material For Your Future</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
            <div className="w-1/2">
              <img src={img1} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 ml-4">
              <h3 className="text-xl font-semibold">Tile</h3>
              <p className="text-gray-600">12x12 RFF001 Floor Tiles Matt White</p>
              <p className="text-green-600 font-semibold">Rs.180.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
            <div className="w-1/2">
              <img src={img2} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 ml-4">
              <h3 className="text-xl font-semibold">Terrazzo</h3>
              <p className="text-gray-600">Terrazzo Flooring</p>
              <p className="text-green-600 font-semibold">Rs.750.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
}

export default Floor;
