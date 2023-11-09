import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import WindowsOne from "../Assets/window.jpg";
import NavBar from "../../components/Navbar";

const WallView = () => {
  const windowTypes = [
    { type: "Aluminium Window", image: WindowsOne },
    { type: "Aluminium Window", image: WindowsOne },
    { type: "Aluminium Window", image: WindowsOne },
    { type: "Aluminium Window", image: WindowsOne },
    { type: "Aluminium Window", image: WindowsOne },
    { type: "Aluminium Window", image: WindowsOne },
    // Add more window types as needed
  ];
  const [selectedWindow, setSelectedWindow] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = async () => {
    if (!selectedWindow || !quantity || !size) {
      alert("Please fill in all fields");
      return;
    }

    const formData = {
      windowType: selectedWindow.type,
      windowImage: selectedWindow.image,
      size: size,
      quantity: quantity,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/Models/Process/PartsOfConstructions/window_process.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data); // Handle the response from the backend
    } catch (error) {
      console.error("Error sending data to backend", error);
    }
  };

  const openPopup = (windowType) => {
    setSelectedWindow(windowType);
  };

  const closePopup = () => {
    setSelectedWindow(null);
    setQuantity("");
    setSize("");
  };

  return (
    <div>
        <NavBar/>
    <div className="bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h1 className="text-3xl font-bold text-gray-900 text-center pb-16">Windows Type</h1>

  <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
    {windowTypes.map(({ type, image }) => (
      <div key={type} className="group relative pb-16">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img
            src={image}
            alt={type}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <button
          onClick={() => openPopup({ type, image })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
        >
          {type}
        </button>
      </div>
    ))}
  </div>
</div>
 </div>

      {/* Popup/Modal */}
      {selectedWindow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-2xl font-bold mb-4">{selectedWindow.type}</h2>

            <label className="block mb-2">
              Size:
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="form-select mt-1 block w-full"
              >
                <option value="size1">Size 1</option>
                <option value="size2">Size 2</option>
                {/* Add more sizes as needed */}
              </select>
            </label>

            <label className="block mb-2">
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-input mt-1 block w-full"
              />
            </label>

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                onClick={closePopup}
                className="ml-4 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default WallView;
