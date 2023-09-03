import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";

const ColumnView = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg";

  const [formData, setFormData] = useState({
    height: "",
    width: "",
    length: "",
    unit: "ft",
  });

  const [showDataSection, setShowDataSection] = useState(false);

  const [data, setData] = useState({
    height: "",
    length: "",
    width: "",
    unit: "ft",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/Models/Process/PartsOfConstructions/Columns_Process.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from PHP:", response.data);

      if (response.data.message === "Data received successfully") {
        setData({
          sandQ: parseFloat(response.data.sand).toFixed(2), // Format to 2 decimal places
          cemntQ: parseFloat(response.data.cement).toFixed(2), // Format to 2 decimal places
          metalQ: parseFloat(response.data.matel).toFixed(2), // Format to 2 decimal places
          reinforcementQ: parseFloat(response.data.rainforcementBars).toFixed(2), // Format to 2 decimal places
          bindingWiresQ: parseFloat(response.data.bindingWires).toFixed(2), // Format to 2 decimal places
          totalCost: parseFloat(response.data.cost).toFixed(2), // Format to 2 decimal places
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

      <div
        className=" min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        {showDataSection ? (
          <div className="bg-white rounded p-16 shadow-md">
            <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">
              Cost and Quantity Estimation of Column
            </h1>
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
                  <td className="border px-4 py-2">Sand Quantity</td>
                  <td className="border px-4 py-2">Cubes</td>
                  <td className="border px-4 py-2">{data.sandQ}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Cement Quantity</td>
                  <td className="border px-4 py-2">Kg</td>
                  <td className="border px-4 py-2">{data.cemntQ}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Metal Quantity</td>
                  <td className="border px-4 py-2">Cubes</td>
                  <td className="border px-4 py-2">{data.metalQ}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Reinforcement Bars Quantity</td>
                  <td className="border px-4 py-2">Meters</td>
                  <td className="border px-4 py-2">{data.reinforcementQ}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Binding Wires Quantity</td>
                  <td className="border px-4 py-2">Meters</td>
                  <td className="border px-4 py-2">{data.bindingWiresQ}</td>
                </tr>
                <tr>
                  <td className=""></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <b>Total Cost</b>
                  </td>
                  <td className="border px-4 py-2">
                    <b>{data.totalCost}LKR</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded p-16 shadow-md" style={{ marginTop: '120px',marginBottom:'80px' }}>
            <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">
              Add Column Dimension
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="width"
                  className="block text-sm font-medium text-gray-700"
                >
                  Width
                </label>
                <input
                  type="number"
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
                  Length
                </label>
                <input
                  type="number"
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="height"
                  className="block text-sm font-medium text-gray-700"
                >
                  Height
                </label>
                <input
                  type="number"
                  name="height"
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

export default ColumnView;
