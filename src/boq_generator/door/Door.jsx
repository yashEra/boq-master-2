import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import DoorsOne from "../Assets/img11.jpg";
import NavBar from "../../components/Navbar";

const DoorView = () => {
  const doorsTypes = [
    { type: "Aluminium door", image: DoorsOne, size1: "Size 1", size2: "Size 2" },
    { type: "Aluminium door", image: DoorsOne },
    { type: "Aluminium door", image: DoorsOne },
    { type: "Aluminium door", image: DoorsOne },
    { type: "Aluminium door", image: DoorsOne },
    { type: "Aluminium door", image: DoorsOne },
  ];
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");

  const [showDataSection, setShowDataSection] = useState(false);

  const [data, setData] = useState({
    doorType: null,
    quantity: null,
    price: null,
    size: null,
  });

  const handleSubmit = async () => {
    if (!selectedDoor || !quantity || !size) {
      alert("Please fill in all fields");
      return;
    }

    const formData = {
      doorType: selectedDoor.type,
      doorImage: selectedDoor.image,
      size: size,
      quantity: quantity,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/Models/Process/PartsOfConstructions/door_process.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      if (response.data.status === "1") {
        setData({
          doorType: response.data.doorType,
          quantity: response.data.quantity,
          size: response.data.size,
          price: parseFloat(response.data.price).toFixed(2),
        });
        setShowDataSection(true);
      }
    } catch (error) {
      console.error("Error sending data to backend", error);
    }
  };

  const openPopup = (doorType) => {
    setSelectedDoor(doorType);
    setSize(""); // Reset size when a new door type is selected
  };

  const closePopup = () => {
    setSelectedDoor(null);
    setQuantity("");
    setSize("");
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h1 className="text-3xl font-bold text-gray-900 text-center pb-16">
              Doors Type
            </h1>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {doorsTypes.map(({ type, image, size1, size2 }) => (
                <div key={type} className="group relative pb-16">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={image}
                      alt={type}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <button
                    onClick={() => openPopup({ type, image, size1, size2 })}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedDoor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {showDataSection ? (
              <div className="bg-white rounded p-16 shadow-md">
                <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">
                  Cost and Quantity Estimation of Door
                </h1>
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Door Type</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">{data.doorType}</td>
                      <td className="border px-4 py-2">{data.quantity}</td>
                      <td className="border px-4 py-2">{data.size}</td>
                    </tr>
                    <tr>
                      <td className=""></td>
                      <td className="border px-4 py-2">
                        <b>Total Cost</b>
                      </td>
                      <td className="border px-4 py-2">
                        <b>{data.price}LKR</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-md">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedDoor.type}
                </h2>

                <label className="block mb-2">
                  Size:
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="form-select mt-1 block w-full"
                  >
                    {selectedDoor.size1 && (
                      <option value="size1">{selectedDoor.size1}</option>
                    )}
                    {selectedDoor.size2 && (
                      <option value="size2">{selectedDoor.size2}</option>
                    )}
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
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DoorView;
