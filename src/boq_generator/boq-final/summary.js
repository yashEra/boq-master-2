import React from 'react';
import unit_types from '../../services/units_types.json';
import { getGroupedItems, removeFromLocalStorage } from '../../services/localstorage';
import { useEffect } from 'react';
import NavBar from '../../components/Navbar';

export default function BoQSummary() {
    const [data, setData] = React.useState([]);
    async function initData() {
        let data = await getGroupedItems();
        setData(data);
        console.log(data)
    }
    useEffect(() => {
        initData();
    }, [])
    return (
        <div className="boq-summary">
            <NavBar />
            <div className="p-32 ">
                <h1 className='text-2xl text-center font-bold'>Summary</h1>
                {/* display as tables, one after other for all keys in unit_types */}
                {Object.keys(unit_types).map((key) => {
                    return (
                        <div className="mb-8">
                            <h2 className="text-xl font-bold">{key.toUpperCase()}/s</h2>
                            <div className='rounded p-8 border-2 border-gray-700 mt-2'>
                                <table className="table-auto">
                                    <thead>
                                        <tr>
                                            {Object.keys(unit_types[key]).map((s) => {
                                                return <th className='border px-4 py-1'>{unit_types[key][s]}</th>;
                                            })}
                                            <th className='border px-4 py-1'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data[key] && data[key].map((item) => {
                                            return (
                                                <tr>
                                                    {Object.keys(item).map((s) => {
                                                        if (s == 'key') {
                                                            return <td className="border"><button className="bg-red-600 rounded py-1 px-2 text-white" onClick={() => {
                                                                removeFromLocalStorage(item[s]);
                                                                initData();
                                                            }}>Remove</button></td>
                                                        } else {
                                                            return <td className="border">{item[s]}</td>;
                                                        }
                                                    })}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
