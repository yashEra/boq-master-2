import { useState, useEffect } from "react";
import { getFromLocalStorage, removeFromLocalStorage } from "../services/localstorage";

// columns
// {
//     height: "",
//     width: "",
//     length: "",
//     noOfColumns: "",
//     unit: "ft",
//   }
const types_columns = {
    'wall': {
        height: "Height",
        length: "Length",
        unit: "Unit",
        brickTypes: "Brick Type"
    },
    'tiebeam': {
        height: "Height",
        width: "Width",
        length: "Length",
        noOfTiebeams: "No of Tiebeams",
        unit: "Unit",
    },
    "stair":{
        length: "Length",
        width: "Width",
        unit: "Unit",
        noOfSteps: "No of Steps",
        thread: "Thread",
        riser:"Riser",
        thickness:"Thickness",
    },
    "slab": {
        thickness: "Thickness",
        width: "Width",
        length: "Length",
        unit: "Unit",
    },
    "column": {
        height: "Height",
        width: "Width",
        unit: "Unit",
        noOfColumns: "No of Columns",
    },
}

const SavedItems = ({ type }) => {
    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    async function initData() {
        let data = await getFromLocalStorage(type);
        setData(data);
    }

    useEffect(() => {
        initData();
    }, []);

    return (
        <div>
            <button className="bg-green-600 text-white py-1 px-2 rounded-md" onClick={() => setModalIsOpen(true)}>View Current {type}s</button>
            {modalIsOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-y-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h1 className="block font-medium text-lg text-gray-700 text-center mb-4">Current {type}s</h1>
                                <table className="table-auto">
                                    <thead>
                                        <tr>
                                            {data.length > 0 && Object.keys(data[0]).map((key) => {
                                                return <th>{types_columns[type][key]}</th>;
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item) => {
                                            return (
                                                <tr>
                                                    {Object.keys(item).map((key) => {
                                                        if (key == 'key') {
                                                            return <td className="border"><button className="bg-red-600 rounded py-1 px-2 text-white" onClick={() => {
                                                                removeFromLocalStorage(item[key]);
                                                                initData();
                                                            }}>Remove</button></td>
                                                        } else {
                                                            return <td className="border">{item[key]}</td>;
                                                        }
                                                    })}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={() => setModalIsOpen(false)} className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SavedItems;