import React, { useState } from "react";
import axios from "axios";
import WallsImg from '../Assets/wall.jpg'
import { saveToLocalStorage } from '../../services/localstorage'
import SavedItems from "../../components/SavedItems";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const WallView = () => {
  const backgroundImageUrl = WallsImg;

  const [formData, setFormData] = useState({
    height: "",
    length: "",
    unit: "feet",
    brickTypes: "clayBrick"
  });

  const [showDataSection, setShowDataSection] = useState(false);

  const [data, setData] = useState({
    noOfBricks: null,
    sandQ: null,
    cemntQ: null,
    totalCost: null
  });

  const [brickTypeOption, setBrickTypeOption] = useState("singleBrick");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBrickTypeChange = (e) => {
    setBrickTypeOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/Models/Process/PartsOfConstructions/wall_process.php",
        { ...formData, brickTypeOption },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from PHP:", response.data);
      console.log("Response from PHP:", response.data.numberOfBricks);

      await saveToLocalStorage('wall', formData)

      if (response.data.message === "Data received successfully") {
        setData({
          noOfBricks: parseFloat(response.data.numberOfBricks).toFixed(0),
          description: response.data.description,
          area: parseFloat(response.data.area).toFixed(2),
          totalCost: parseFloat(response.data.blockworksCost).toFixed(2),
          unitRate: parseFloat(response.data.unitRate).toFixed(2),
          finishcost: parseFloat(response.data.wallFinishingCost).toFixed(2)
        });
        setShowDataSection(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const closePopup = () => {

    // setResetForm(true);
    setShowDataSection(false);

  };


  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
        {showDataSection ? (
          <div className="bg-white rounded p-16 shadow-md">
            <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">Cost and Quantity Estimation of Wall</h1>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Unit</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Rate</th>
                  <th className="px-4 py-2">Amount</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">{data.description}</td>
                  <td className="border px-4 py-2">Sq.m</td>
                  <td className="border px-4 py-2">{data.area}</td>
                  <td className="border px-4 py-2">{data.unitRate}</td>
                  <td className="border px-4 py-2">{data.totalCost}</td>

                </tr>
                <tr>
                  <td className="border px-4 py-2">Wall Finishing</td>
                  <td className="border px-4 py-2">Sq.m</td>
                  <td className="border px-4 py-2">{data.area}</td>
                  <td className="border px-4 py-2">100</td>
                  <td className="border px-4 py-2">{data.finishcost}</td>

                </tr>
                <tr>
                  <td className="border px-4 py-2">Total Cost</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">{data.totalCost + data.finishcost}</td>


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
              <SavedItems type={'wall'}/>
            </div> */}
          </div>
        ) : (
          <div className="bg-white rounded p-16 shadow-md">
            <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">Add wall dimension</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="height"
                  className="block text-sm font-medium text-gray-700"
                >
                  Height
                </label>
                <input
                  type="text"
                  name="height"
                  value={formData.height}
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
                  type="text"
                  name="length"
                  value={formData.length}
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
                  <option value="m">meter</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="brickTypes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Brick Type
                </label>
                <select
                  name="brickTypes"
                  value={formData.brickTypes}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="clayBrick">Clay Brick</option>
                  <option value="cementBrick">Cement Brick</option>
                </select>
              </div>
              {formData.brickTypes === "clayBrick" && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Brick Type Options
                  </label>
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="brickTypeOption"
                        value="singleBrick"
                        checked={brickTypeOption === "singleBrick"}
                        onChange={handleBrickTypeChange}
                        className="form-radio h-5 w-5 text-indigo-600"
                      />
                      <span className="ml-2">Single Brick</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="brickTypeOption"
                        value="doubleBrick"
                        checked={brickTypeOption === "doubleBrick"}
                        onChange={handleBrickTypeChange}
                        className="form-radio h-5 w-5 text-indigo-600"
                      />
                      <span className="ml-2">Double Brick</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="brickTypeOption"
                        value="polishedBrick"
                        checked={brickTypeOption === "polishedBrick"}
                        onChange={handleBrickTypeChange}
                        className="form-radio h-5 w-5 text-indigo-600"
                      />
                      <span className="ml-2">Polished Brick</span>
                    </label>
                  </div>
                </div>
              )}
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

export default WallView;
