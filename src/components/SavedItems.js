import { useState, useEffect } from "react";
import { removeFromLocalStorage } from "../services/localstorage";
import types_columns from "../services/units_types.json";

const SavedItems = ({ state, formType, floor }) => {
    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        initData();
    }, [state, formType, floor]);

    async function initData() {
        const selectedFloor = state.floors.find((f) => f.id === floor);

        if (selectedFloor) {
            const floorComponents = selectedFloor.components.filter((component) => component.type === formType);
            setData(floorComponents);
        } else {
            setData([]);
        }
    }

    const shouldExcludeKey = (key) => {
        // Add keys that should be excluded from the table
        const excludedKeys = ["key", "type"];
        return excludedKeys.includes(key);
    };

    return (
        <div>
            <button className="bg-green-600 text-white py-1 px-2 rounded-md" onClick={() => setModalIsOpen(true)}>
                Show List
            </button>
            {modalIsOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-y-scroll shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h1 className="block font-medium text-lg text-gray-700 text-center mb-4">Current {formType}s</h1>
                                {data.length > 0 && (
                                    <table className="table-auto">
                                        <thead>
                                            <tr>
                                                {Object.keys(data[0]).map((key) => (
                                                    !shouldExcludeKey(key) && <th key={key}>{types_columns[formType][key]}</th>
                                                ))}
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => (
                                                <tr key={item.key}>
                                                    {Object.keys(item).map((key) => (
                                                        !shouldExcludeKey(key) && (
                                                            <td key={key} className="border">
                                                                {item[key]}
                                                            </td>
                                                        )
                                                    ))}
                                                    <td className="border">
                                                        <button
                                                            className="bg-red-600 rounded py-1 px-2 text-white"
                                                            onClick={() => {
                                                                removeFromLocalStorage(item.key);
                                                                initData();
                                                            }}
                                                        >
                                                            Remove
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={() => setModalIsOpen(false)}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SavedItems;
