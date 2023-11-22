import { useState } from "react";
import formData from "../../services/form_data.json"
import { AddOutlined } from '@mui/icons-material'
import DynamicForm from "./dynamic_form";
import SavedItems from "../../components/SavedItems";

function AddComponents({ state, setState }) {
    const [showModel, setShowModel] = useState(false)
    const [formType, setFormType] = useState('wall')
    const [floor, setFloor] = useState(0)

    const handleComplete = () => {
        const steps = [...state.steps];
        steps[2].isCompleted = true;
        setState({ ...state, selectedStep: 3, steps: steps });
    };

    const handleSubmit = async (data) => {
        const floors = [...state.floors];
        floors[floor].components.push(data)
        setState({ ...state, floors: floors });
        setShowModel(false)
    };
    const handleCancel = () => {
        setShowModel(false)
    }
    return (
        <>
            <h2 className="text-center text-2xl m-8">Now lets add components to your {state.buildingType}</h2>
            <div className="mx-auto max-w-4xl m-2">
                {state.floors.map((floor) => (
                    <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2" key={floor.id}>
                        <div>
                            <h2 className="font-bold text-xl">Floor {floor.id}</h2>
                            <p className="text-sm -mt-2">{floor.name}</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 mt-4">

                            {Object.keys(formData).map((formType, index) => {
                                if ((formType === 'footings' || formType === 'foundation') && floor.id !== 1) {
                                    return null; // Do not render footings or foundation on floors other than the first
                                } else {
                                    return (
                                        <div key={index} className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                                            <div>
                                                <h2 className="font-bold text-xl">{formType.charAt(0).toUpperCase() + formType.slice(1)}s</h2>
                                                <SavedItems state={state} formType={formType} floor={floor.id} />
                                                <button
                                                    onClick={() => {
                                                        setFormType(formType);
                                                        setShowModel(true);
                                                        setFloor(floor.id - 1);
                                                    }}
                                                    className="bg-indigo-400 text-white py-1 px-2 rounded-md mt-2"
                                                >
                                                    <AddOutlined /> {formType.charAt(0).toUpperCase() + formType.slice(1)}
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }
                            })}


                        </div>

                    </div>
                ))}
            </div>
            {showModel &&
                <div className="top-0 left-0 right-0 absolute z-50">
                    <DynamicForm formData={formData} onSubmit={handleSubmit} formType={formType} onClose={handleCancel} />
                </div>}
            <div className="flex justify-center py-12">
                {/* <WindowView/> */}
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleComplete()}>
                    Continue
                </button>
            </div>
        </>
    );
}

export default AddComponents;