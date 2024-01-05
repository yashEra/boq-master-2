import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { saveToLocalStorage } from "../../services/localstorage";
import SavedItems from "../../components/SavedItems";

const SlabView = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg";

  const [formData, setFormData] = useState({
    thickness: "",
    width: "",
    length: "",
    unit: "ft",
  });

  const [showDataSection, setShowDataSection] = useState(false);

  const [data, setData] = useState({
    thickness: "",
    length: "",
    width: "",
    unit: "ft",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/Models/Process/PartsOfConstructions/slab_process.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from PHP:", response.data);

      await saveToLocalStorage("slab", formData);

      if (response.data.message === "Data received successfully") {
        setData({
          descriptionC: response.data.descriptionConcrete,
          descriptionF: response.data.descriptionFormworks,
          volume: parseFloat(response.data.volume).toFixed(2),
          area: parseFloat(response.data.area).toFixed(2),
          // reinforcementQ: parseFloat(response.data.rainforcementBars).toFixed(2),
          unitC: parseFloat(response.data.unitC).toFixed(2),
          unitF: parseFloat(response.data.unitF).toFixed(2),
          cCost: parseFloat(response.data.concreteCost).toFixed(2),
          fCost: parseFloat(response.data.formworksCost).toFixed(2),
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

  const closePopup = () => {
    // setResetForm(true);
    setShowDataSection(false);

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
              Cost and Quantity Estimation of Slab
            </h1>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Unit</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Rate</th>
                  <th className="px-4 py-2">Amount-SL-Rs.</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td className="border px-4 py-2">{data.descriptionC}</td>
                  <td className="border px-4 py-2">Cubic Meter</td>
                  <td className="border px-4 py-2">{data.volume}</td>
                  <td className="border px-4 py-2">{data.unitC}</td>
                  <td className="border px-4 py-2">{data.cCost}</td>

                </tr>
              <tr>
                  <td className="border px-4 py-2">{data.descriptionF}</td>
                  <td className="border px-4 py-2">Square Meter</td>
                  <td className="border px-4 py-2">{data.area}</td>
                  <td className="border px-4 py-2">{data.unitF}</td>
                  <td className="border px-4 py-2">{data.fCost}</td>

                </tr>
                <tr>
                  <td className=""></td>
                  <td className=""></td>
                  <td className=""></td>
                  <td className=""></td>
                  <td className="">            
                  <button
                    onClick={closePopup}
                    className="bg-red-600 text-white py-1 px-2 rounded-md"
                  >
                    Close
                  </button></td>

                </tr>
              </tbody>
            </table>
            {/* <div className="float-right mt-2">
              <SavedItems type={'slab'}/>
              </div> */}
          </div>
        ) : (
          <div className="bg-white rounded p-16 shadow-md" style={{ marginTop: '120px',marginBottom:'80px' }}>
            <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">
              Add Slab Dimension
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
                  htmlFor="thickness"
                  className="block text-sm font-medium text-gray-700"
                >
                  Thickness
                </label>
                <input
                  type="number"
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
                  <option value="feet">ft</option>
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

export default SlabView;
