import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { saveToLocalStorage } from "../../services/localstorage";
import SavedItems from "../../components/SavedItems";

const ColumnView = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg";

  const [formData, setFormData] = useState({
    height: "",
    width: "",
    length: "",
    noOfColumns: "",
    unit: "ft",
  });

  const [showDataSection, setShowDataSection] = useState(false);

  const [data, setData] = useState({
    height: "",
    length: "",
    width: "",
    noOfColumns: "",
    unit: "ft",
  });

  let total = 0;

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

      await saveToLocalStorage("column", formData);

      if (response.data.message === "Data received successfully") {
        setData({
          concrete: parseFloat(response.data.concrete).toFixed(2),
          reinforcement: parseFloat(response.data.reinforcement).toFixed(2),
          formworks: parseFloat(response.data.formworks).toFixed(2),
          concreteQuantity: parseFloat(response.data.concreteQuantity).toFixed(2),
          reinforcementQuantity: parseFloat(response.data.reinforcementQuantity).toFixed(2),
          formworksQuantity: parseFloat(response.data.formworksQuantity).toFixed(2),
          concreteUnitPrice: parseFloat(response.data.concreteUnitPrice).toFixed(2),
          reinforcementUnitPrice: parseFloat(response.data.reinforcementUnitPrice).toFixed(2),
          formworksUnitPrice: parseFloat(response.data.formworksUnitPrice).toFixed(2),
        });

        total = parseFloat(response.data.concrete) + parseFloat(response.data.reinforcement) + parseFloat(response.data.formworks);
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
        className="pt-12 min-h-screen flex items-center justify-center"
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
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Unit</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Unit Price</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Concrete</td>
                  <td className="border px-4 py-2">Cu.m</td>
                  <td className="border px-4 py-2">{data.concreteQuantity}</td>
                  <td className="border px-4 py-2">{data.concreteUnitPrice}</td>
                  <td className="border px-4 py-2">{data.concrete}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Reinforcement</td>
                  <td className="border px-4 py-2">Kg</td>
                  <td className="border px-4 py-2">{data.reinforcementQuantity}</td>
                  <td className="border px-4 py-2">{data.reinforcementUnitPrice}</td>
                  <td className="border px-4 py-2">{data.reinforcement}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Form Works</td>
                  <td className="border px-4 py-2">Cu.m</td>
                  <td className="border px-4 py-2">{data.formworksQuantity}</td>
                  <td className="border px-4 py-2">{data.formworksUnitPrice}</td>
                  <td className="border px-4 py-2">{data.formworks}</td>
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
                    <b>{total.toFixed(2)} LKR</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="float-right mt-2">
              <SavedItems type={"column"} />
            </div>
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
                  value={formData.height}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="noOfColumns"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Columns
                </label>
                <input
                  type="number"
                  name="noOfColumns"
                  value={formData.noOfColumns}
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
                  <option value="feet">feet</option>
                  <option value="meter">meter</option>
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
