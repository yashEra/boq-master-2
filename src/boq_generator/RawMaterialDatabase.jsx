import React, { useState, useEffect } from "react";
import axios from "axios";
import WallsImg from './Assets/home-bg.jpg';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const RawMaterialsTable = () => {
    const backgroundImageUrl = WallsImg;
  // State to store the raw material data, initialized as an empty array
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the PHP API when the component mounts
    axios.get("http://localhost:8080/Models/Process/rawmaterial.php")
      .then((response) => {
        // Check if the response data is an array before updating the state
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div>
        <NavBar />
        <div>

    <div className="min-h-screen flex items-center justify-center"   style={{
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
  }}>

    <div className="bg-white rounded p-16 shadow-md mt-16">
      <h1 className="text-2xl font-bold mb-4">Raw Materials Table</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Material Name</th>
            <th className="px-4 py-2">Unit</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Material Price</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.material_id}>
              <td className="border px-4 py-2">{item.material_name}</td>
              <td className="border px-4 py-2">{item.unit}</td>
              <td className="border px-4 py-2">{item.quentiti}</td>
              <td className="border px-4 py-2">{item.material_price}</td>
              <td className="border px-4 py-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default RawMaterialsTable;
