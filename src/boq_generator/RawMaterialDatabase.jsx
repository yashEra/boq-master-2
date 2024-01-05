import React, { useState, useEffect } from "react";
import axios from "axios";
import WallsImg from "./Assets/home-bg.jpg";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const RawMaterialsTable = () => {
  const backgroundImageUrl = WallsImg;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/Models/Process/rawmaterial.php")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <div
          className="min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url('${backgroundImageUrl}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-white rounded p-16 shadow-md mt-16">
            <h1 className="text-2xl font-bold mb-4 text-gray-500">Raw Materials Table</h1>
            <table className="min-w-full table-auto">
              <thead>
                <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th class="px-4 py-3">Material Name</th>
                  <th class="px-4 py-3">Unit</th>
                  <th class="px-4 py-3">Quantity</th>
                  <th class="px-4 py-3">Material Price</th>
                  <th class="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {data.map((item) => (
                  <tr key={item.material_id} className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                    <td  class="px-4 py-3">
                      {item.material_name.replace(/_/g, " ").toUpperCase()}
                    </td>{" "}
                    <td class="px-4 py-3 text-sm">{item.unit}</td>
                    <td class="px-4 py-3 text-sm">{item.quentiti}</td>
                    <td class="px-4 py-3 text-sm">{item.material_price}</td>
                    <td class="px-4 py-3 text-sm">{item.date}</td>
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
