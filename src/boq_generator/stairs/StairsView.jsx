import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

const StairsView = () => {
  const backgroundImageUrl = "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg";

  const [formData, setFormData] = useState({
    length: "",
    width: "",
    unit: "ft",
    noOfSteps: "",
    thread: "",
    riser:"",
    thickness:"",
  });

  const [showDataSection, setShowDataSection] = useState(false);

  const [data, setData] = useState({
    noOfBricks: null,
    sandQ: null,
    cemntQ: null,
    totalCost: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/Models/Process/PartsOfConstructions/stairs-process.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from PHP:", response.data);
      console.log("Response from PHP:", response.data.numberOfBricks);
      
      if (response.data.message === "Data received successfully") {
        setData({
          cementQ: response.data.cement,
          sandQ: response.data.sand,
          matelQ: response.data.matel,
          rainforcementBarsQ: response.data.rainforcementBars,
          bindingWirestQ: response.data.bindingWires,
          totalCost: response.data.cost,
        });
        setShowDataSection(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />

      <div className=" min-h-screen flex items-center justify-center" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
      {showDataSection ? (
  <div className="bg-white rounded p-16 shadow-md">
    <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">Cost and Quantity Estimation of Wall</h1>
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Material</th>
          <th className="px-4 py-2">Unit</th>
          <th className="px-4 py-2">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Matel</td>
          <td className="border px-4 py-2">Cubic feet</td>
          <td className="border px-4 py-2">{data.matelQ}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Sand</td>
          <td className="border px-4 py-2">Cubic feet</td>
          <td className="border px-4 py-2">{data.sandQ}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Cement</td>
          <td className="border px-4 py-2">50Kg Bags</td>
          <td className="border px-4 py-2">{data.cementQ}</td>
        </tr>

        <tr>
          <td className="border px-4 py-2">Rainforcement Bars</td>
          <td className="border px-4 py-2">m</td>
          <td className="border px-4 py-2">{data.rainforcementBarsQ}</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Binding Wires</td>
          <td className="border px-4 py-2">Kg</td>
          <td className="border px-4 py-2">{data.bindingWirestQ}</td>
        </tr>

        <tr>
        <td className=""></td>
        </tr>
        <tr>
        <td className=""></td>
          <td className="border px-4 py-2"><b>Total Cost</b></td>
          <td className="border px-4 py-2"><b>{data.totalCost}LKR</b></td>
        </tr>
      </tbody>
    </table>
  </div>
) : (
          <div className="bg-white rounded p-16 shadow-md" style={{ marginTop: '120px',marginBottom:'80px' }}>
            <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">Add Stairs dimension</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                  htmlFor="noOfSteps"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomber of Steps
                </label>
                <input
                  type="text"
                  name="noOfSteps"
                  value={formData.noOfSteps}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                </div>
                <div className="mb-4">
                <label
                  htmlFor="thread"
                  className="block text-sm font-medium text-gray-700"
                >
                  Thread
                </label>
                <input
                  type="text"
                  name="thread"
                  value={formData.thread}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                </div>
                <div className="mb-4">
                <label
                  htmlFor="riser"
                  className="block text-sm font-medium text-gray-700"
                >
                  Riser
                </label>
                <input
                  type="text"
                  name="riser"
                  value={formData.riser}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                </div>
              <div className="mb-4">
                <label
                  htmlFor="width"
                  className="block text-sm font-medium text-gray-700"
                >
                  Width of Stairs
                </label>
                <input
                  type="text"
                  name="width"
                  value={formData.width}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="length"
                  className="block text-sm font-medium text-gray-700"
                >
                  Length of Staircase
                </label>
                <input
                  type="text"
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="thickness"
                  className="block text-sm font-medium text-gray-700"
                >
                  Thicknes of Staircase
                </label>
                <input
                  type="text"
                  name="thickness"
                  value={formData.thickness}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="unit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Unit
                </label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="ft">ft</option>
                  <option value="m">m</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StairsView;
