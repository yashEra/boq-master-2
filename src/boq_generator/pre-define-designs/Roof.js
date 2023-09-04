import React from 'react';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';

function Roofs() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <section id="roof" className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">ROOF</h1>
        <h3 className="text-lg mb-4">Select Your Best Material For Your Future</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={img3} alt="" className="w-48 h-auto" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">Rhino Cement Roofing sheet</h3>
              <p className="text-gray-600">1750mm Rhino Cement Roofing sheet</p>
              <p className="text-green-600 font-semibold">Rs.4,000.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={img4} alt="" className="w-48 h-auto" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">Anton Armor Roofing Sheet</h3>
              <p className="text-gray-600">8 Feet x 3 Feet Red color Armor sheet</p>
              <p className="text-green-600 font-semibold">Rs.13,000.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={img5} alt="" className="w-48 h-auto" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">Roof Max Roofing Sheet</h3>
              <p className="text-gray-600">7 Feet x 3 Feet Green color</p>
              <p className="text-green-600 font-semibold">Rs.16,000.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={img6} alt="" className="w-48 h-auto" />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-semibold">AC Terres Roofing Sheet</h3>
              <p className="text-gray-600">1700mm Blue color AC Terres Roofing Sheet</p>
              <p className="text-green-600 font-semibold">Rs.10,000.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                Select
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Roofs;
