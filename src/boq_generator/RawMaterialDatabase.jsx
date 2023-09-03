import React, { useState, useEffect } from "react";
import axios from "axios";

const RawMaterialsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the PHP API
    axios.get("http://localhost:8080/Models/Process/PartsOfConstructions/rawmaterial.php")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Raw Materials Table</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Material ID</th>
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
              <td className="border px-4 py-2">{item.material_id}</td>
              <td className="border px-4 py-2">{item.material_name}</td>
              <td className="border px-4 py-2">{item.unit}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">{item.material_price}</td>
              <td className="border px-4 py-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RawMaterialsTable;
