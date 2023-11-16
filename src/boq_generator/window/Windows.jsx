import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import WindowsOne from "../Assets/design1.jpg";
import WindowsTwo from "../Assets/design2.jpg";
import WindowsThree from "../Assets/design3.jpg";
import WindowsFour from "../Assets/design4.jpg";
import WindowsFive from "../Assets/design5.jpg";
import NavBar from "../../components/Navbar";

const WindowView = () => {
  const windowTypes = [
    { id: "1", type: "Frame+Glass Sash+Fittings", image: WindowsOne, size1: '20″x48″', size2: '20″x60″' },
    { id: "2", type: "Frame+2Glass Sash+Fittings", image: WindowsTwo, size1: '39″x48″' },
    { id: "3", type: "Frame+3Glass Sash+Fittings", image: WindowsThree, size1: '58″x48″', size2: '58″x60″' },
    { id: "4", type: "Frame+4Glass Sash+Fittings", image: WindowsFour, size1: '77″x48″' },
    { id: "5", type: "Fan Light Window", image: WindowsFive, size1: '22″x18″', size2: '30″x18″' },
  ];

  const [selectedWindow, setSelectedWindow] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");

  const [showDataSection, setShowDataSection] = useState(false);

  const [data, setData] = useState({
    windowType: null,
    quantity: null,
    price: null,
    size: null,
  });

  const handleSubmit = async () => {
    if (!selectedWindow || !quantity || !size) {
      alert("Please fill in all fields");
      return;
    }

    const formData = {
      windowTypeId: selectedWindow.id,
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

      console.log(response.data);
      if (response.data.status === "1") {
        setData({
          windowType: response.data.windowType,
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

  const openPopup = (windowType) => {
    setSelectedWindow(windowType);
    setSize(""); // Reset size when a new window type is selected
  };

  const closePopup = () => {
    setSelectedWindow(null);
    // setResetForm(true);
    setShowDataSection(false);
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
              Windows Type
            </h1>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {windowTypes.map(({ id, type, image, size1, size2 }) => (
                <div key={id} className="group relative pb-16">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={image}
                      alt={type}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <button
                    onClick={() => openPopup({ id, type, image, size1, size2 })}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
                  >
                    {type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedWindow && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {showDataSection ? (
              <div className="bg-white rounded p-16 shadow-md">
                <h1 className="block text-sm font-medium text-xl text-gray-700 text-center pb-10">
                  Cost and Quantity Estimation of Wall
                </h1>
                <table className="table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Window Type</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">{data.windowType}</td>
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
                <button
                    onClick={closePopup}
                    className="ml-4 text-gray-600 hover:text-gray-800"
                  >
                    Close
                  </button>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-md">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedWindow.type}
                </h2>
                <p style={{ display: "none" }}>{selectedWindow.id}</p>

                <label className="block mb-2">
                  Size:
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="form-select mt-1 block w-full"
                  >
                    <option value="size0">--Select Size--</option>
                    {selectedWindow.size1 && (
                      <option value={selectedWindow.size1}>{selectedWindow.size1}</option>
                    )}
                    {selectedWindow.size2 && (
                      <option value={selectedWindow.size2}>{selectedWindow.size2}</option>
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

export default WindowView;
