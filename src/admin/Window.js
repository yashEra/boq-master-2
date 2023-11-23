import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Window = () => {
  const [windowSizes, setWindowSizes] = useState([]);
  const [windowTypes, setWindowTypes] = useState([]);

  useEffect(() => {
    // Fetch window sizes
    axios.get('http://localhost:8080/Models/Process/PartsOfConstructions/WindowSizes.php')
      .then(response => setWindowSizes(response.data))
      .catch(error => console.error('Error fetching window sizes:', error));

    // Fetch window types
    axios.get('http://localhost:8080/Models/Process/PartsOfConstructions/WindowTypes.php')
      .then(response => setWindowTypes(response.data))
      .catch(error => console.error('Error fetching window types:', error));
  }, []);

  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-2xl font-bold mb-4">Window Sizes</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Type ID</th>
            <th className="px-4 py-2">Size</th>
            <th className="px-4 py-2">Area</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {windowSizes.map(size => (
            <tr key={size.sid}>
              <td className="border px-4 py-2">{size.type_id}</td>
              <td className="border px-4 py-2">{size.size}</td>
              <td className="border px-4 py-2">{size.area}</td>
              <td className="border px-4 py-2">{size.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8 mb-4">Window Types</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {windowTypes.map(window => (
            <tr key={window.id}>
              <td className="border px-4 py-2">{window.id}</td>
              <td className="border px-4 py-2">{window.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Window;
