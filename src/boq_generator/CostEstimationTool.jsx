import React, { useState, useEffect } from "react";
import axios from "axios";
import WallsImg from './Assets/home-bg.jpg';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";


function CostEstimationTool() {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [unit, setUnit] = useState(""); // New state for unit
  
  const backgroundImageUrl = WallsImg;


  // Fetch materials from PHP backend
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/Models/Process/cost_estimation.php?action=get_materials"
      )
      .then((response) => {
        if (Array.isArray(response.data)) {
          setMaterials(response.data);
        } else {
          console.error("Received data is not an array:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching materials:", error));
  }, []);

  // Handle quantity input change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Handle material selection change
  const handleMaterialChange = (e) => {
    const selectedMaterialId = e.target.value;
    setSelectedMaterial(selectedMaterialId);

    // Find the selected material object and set its unit
    const selectedMaterialObj = materials.find(
      (material) => material.material_id === selectedMaterialId
    );
    if (selectedMaterialObj) {
      setUnit(selectedMaterialObj.unit);
    } else {
      setUnit("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8080/Models/Process/cost_estimation.php?action=calculate_price&material_id=${selectedMaterial}&quantity=${quantity}`
      )
      .then((response) => {
        setTotalPrice(response.data);
      })
      .catch((error) => console.error("Error calculating price:", error));
  };

  return (
    <div>
      <NavBar />
      <div
        className=" min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        <div className="bg-white rounded p-16 shadow-md">
          <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">
            Material Price Calculator
          </h1>
          <div className="p-8">
            {/* <h1 className="text-2xl font-semibold mb-4">
              Material Price Calculator
            </h1> */}
            <form onSubmit={handleSubmit} className="mb-8">
              <label htmlFor="material" className="block font-medium mb-2">
                Select Material:
              </label>
              <select
                name="material"
                id="materialSelect"
                onChange={handleMaterialChange}
                className="w-full border p-2 rounded-md"
              >
                <option value="">Select a material</option>
                {Array.isArray(materials) &&
                  materials.map((material) => (
                    <option
                      key={material.material_id}
                      value={material.material_id}
                    >
                      {material.material_name}
                    </option>
                  ))}
              </select>

              {/* Display unit */}
              {unit && <p className="mt-2">Unit: {unit}</p>}

              <label htmlFor="quantity" className="block font-medium mt-4 mb-2">
                Quantity:
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min="1"
                required
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full border p-2 rounded-md"
              />

              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Calculate Price
              </button>
            </form>

            {totalPrice && (
              <p className="text-xl">Total Price: {totalPrice}LKR</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CostEstimationTool;
