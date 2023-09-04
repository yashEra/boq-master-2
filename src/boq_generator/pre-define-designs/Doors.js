import React from 'react';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';
import img13 from './assets/img13.jpg';
import img14 from './assets/img13.jpg';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Doors() {
  return (
    <div><NavBar />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-16">
      <section id="door" className="bg-white p-16 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">DOOR</h1>
        <h3 className="text-lg mb-4">Select Your Best Material For Your Future</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={img11} alt="" className="w-48 h-auto" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">Double Door</h3>
              <p className="text-gray-600">2m Teak Double Door</p>
              <p className="text-green-600 font-semibold">Rs.180,000.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={img12} alt="" className="w-48 h-auto" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">Single Door</h3>
              <p className="text-gray-600">2m Teak Single Door</p>
              <p className="text-green-600 font-semibold">Rs.80,000.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={img13} alt="" className="w-48 h-auto" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">Aluminium Door</h3>
              <p className="text-gray-600">2m Aluminium Single Door</p>
              <p className="text-green-600 font-semibold">Rs.75,000.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={img14} alt="" className="w-48 h-auto" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">Steel Door</h3>
              <p className="text-gray-600">2m Steel Single Door</p>
              <p className="text-green-600 font-semibold">Rs.150,000.00</p>
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

export default Doors;
