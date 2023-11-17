import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PickMeals from "./../Assets/pick-meals-image.png";
import { DeleteForeverOutlined, AddOutlined } from '@mui/icons-material'
import { getFromLocalStorage, saveToLocalStorage } from '../../services/localstorage'
import SavedItems from "../../components/SavedItems";
import DynamicForm from "./dynamic_form";
import WindowView from "../window/Windows";

import formData from "../../services/form_data.json"
import axios from "axios";
import FinalSummary from "./final_summary";
import { convertWordsToTitleCase } from "../../services/utils";

export default function BOQMain() {
    const [state, setState] = useState({
        selectedStep: -1,
        buildingType: '',
        steps: [],
        floors: [{
            id: 1,
            name: "Ground Floor",
            description: "Ground Floor",
            isRoof: true,
            components: []
        }]
    });

    useEffect(() => {
        setState({
            ...state,
            selectedStep: 0,
            steps: [
                {
                    id: 1,
                    name: "Building Type",
                    description: "Select your building type",
                    isCompleted: false,
                },
                {
                    id: 2,
                    name: "Floors",
                    description: "Select your floors",
                    isCompleted: false,
                },
                {
                    id: 3,
                    name: "Components",
                    description: "Select your components",
                    isCompleted: false,
                },
                {
                    id: 4,
                    name: "Summary",
                    description: "Summary of your BOQ",
                    isCompleted: false,
                },
            ],
        });
    }, []);

    const [showFinalSummary, setShowFinalSummary] = useState(false);

    return (
        <>
            <NavBar />
            <div className="pt-24"></div>
            {<div className="border-2 py-2 border-gray-300 flex flex-wrap justify-evenly">
                {state.steps.map((step, i) => (
                    <div key={step.id} onClick={() => setState({ ...state, selectedStep: i })}>
                        <div className="flex items-center">
                            <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 border-2 ${step.isCompleted ? "bg-green-500 text-white" : "bg-gray-100"} ${state.selectedStep === i ? "border-indigo-600 bg-indigo-100" : "border-gray-500"} rounded-full`}>
                                {step.id}
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium text-gray-900">{step.name}</h4>
                                <p className="text-sm text-gray-500">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>}

            <div className="mx-auto">
                {state.selectedStep === 3 && <div className="flex justify-center"><button className="bg-gray-500 text-white rounded-md m-2 p-4 hover:bg-gray-600" onClick={() => { setShowFinalSummary(!showFinalSummary) }}>{showFinalSummary ? 'Show' : 'Hide'} Final Summary</button></div>}
                {showFinalSummary && state.selectedStep === 3 && <FinalSummary props={state} />}
                {state.selectedStep === 0 && <SelectBuildingType state={state} setState={setState} />}
                {state.selectedStep === 1 && <AddFloors state={state} setState={setState} />}
                {state.selectedStep === 2 && <AddComponents state={state} setState={setState} />}
                {state.selectedStep === 3 && <SummaryComponent state={state} floors={state.floors} updateState={setState} />}
            </div>
            <Footer />
        </>
    );
}

function DemoWidget({ state }) {
    return <div className="container mx-auto">
        <p><pre>floors: {JSON.stringify(state.floors, null, 4)}</pre></p>
    </div>;
}

function SelectBuildingType({ state, setState }) {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Building",
        },
        {
            image: PickMeals,
            title: "House",
        },
    ];

    function onClickItem(title) {
        const steps = [...state.steps];
        // console.log(state.steps)
        steps[0].isCompleted = true;
        setState({ ...state, steps: steps, buildingType: title });

    }

    return (
        <>
            <h2 className="text-center text-2xl m-8">What are you going to build..?</h2>
            <div className="flex flex-wrap gap-4 m-4 w-8/12 justify-center mx-auto">
                {workInfoData.map((data) => (
                    <div className={`w-48 text-center hover:bg-gray-300 rounded-md p-4 ${state.buildingType == data.title ? "bg-gray-100 border-2 border-indigo-400" : "bg-white"}`} key={data.title} onClick={() => onClickItem(data.title)}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                    </div>
                ))}
            </div>
            {state.buildingType != '' && <div className="flex justify-center py-12">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => setState({ ...state, selectedStep: 1 })}>
                    Continue
                </button>
            </div>}

        </>
    );
}

function AddFloors({ state, setState }) {
    function onComplete() {
        const steps = [...state.steps];
        steps[1].isCompleted = true;
        setState({ ...state, selectedStep: 2, steps: steps });
    }
    function setRoof(id, value) {
        const floors = [...state.floors];
        floors[id - 1].isRoof = value;
        setState({ ...state, floors: floors });
    }

    function addFloor() {
        const floors = [...state.floors];
        const id = floors.length + 1;
        floors.push({
            id: id,
            name: "Floor " + id,
            description: "Floor " + id,
            isRoof: false,
            components: []
        });
        setState({ ...state, floors: floors });
    }

    function removeFloor(id) {
        const floors = [...state.floors];
        floors.splice(id - 1, 1);
        floors.forEach((floor, i) => {
            if (i > 0) {
                floor.id = i + 1;
                floor.name = "Floor " + floor.id;
                floor.description = "Floor " + floor.id;
            }
        })
        setState({ ...state, floors: floors });
    }
    return (
        <>
            <h2 className="text-center text-2xl m-8">Now lets add floors to your {state.buildingType}</h2>
            <div className="mx-auto max-w-xl m-2">
                {state.floors.map((floor) => (
                    <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg flex flex-wrap justify-between mb-2">
                        <div>
                            <h2 className="font-bold text-xl">Floor {floor.id}</h2>
                            <p className="text-sm -mt-2">{floor.name}</p>
                        </div>
                        <div>
                            <p className="text-sm mb-2">Select Roof Type</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className={`py-1 px-6 border-2 rounded-xl ${floor.isRoof ? "bg-indigo-100 border-indigo-500 text-indigo-800 font-bold" : "border-white bg-gray-100"}`} onClick={() => setRoof(floor.id, true)}>Roof</button>
                                <button className={`py-1 px-6 border-2 rounded-xl ${floor.isRoof ? "bg-gray-100 border-white" : "border-indigo-500 bg-indigo-100 text-indigo-800 font-bold"}`} onClick={() => setRoof(floor.id, false)}>Slab</button>
                            </div>
                        </div>
                        <div>
                            {floor.id > 1 && <DeleteForeverOutlined className="text-red-500 cursor-pointer" onClick={() => removeFloor(floor.id)} />}
                        </div>
                    </div>
                ))}
                <div className="border-2 px-8 py-3 text-center rounded-lg mb-2 hover:bg-gray-200 cursor-pointer border-dashed" onClick={() => addFloor()}>
                    + Add Floor
                </div>
            </div>
            {/* continue button */}
            <div className="flex justify-center py-12">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => onComplete()}>
                    Continue
                </button>
            </div>
        </>
    );
}

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
        await saveToLocalStorage(data.type, data)
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
                    <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                        <div>
                            <h2 className="font-bold text-xl">Floor {floor.id}</h2>
                            <p className="text-sm -mt-2">{floor.name}</p>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 mt-4">

                            {Object.keys(formData).map((formType, index) => (
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
                            ))}
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
const SummaryComponent = ({ floors, updateState, state }) => {
    const [summaries, setSummaries] = useState([]);

    useEffect(() => {
        const fetchSummaries = async () => {
            try {
                const summariesData = {};

                for (const floor of floors) {
                    for (const component of floor.components) {
                        const summaryUrl = getSummaryUrl(component.type);
                        const response = await axios.post(summaryUrl, component);

                        if (!summariesData[component.type]) {
                            summariesData[component.type] = {
                                type: component.type,
                                summary: {},
                                components: [],
                                responses: [],
                            };
                        }

                        // Accumulate numeric values
                        Object.entries(response.data).forEach(([key, value]) => {
                            if (typeof value === "number") {
                                summariesData[component.type].summary[key] =
                                    (summariesData[component.type].summary[key] || 0) + value;
                            } else {
                                summariesData[component.type].summary[key] = value;
                            }
                        });

                        summariesData[component.type].components.push(component);
                        summariesData[component.type].responses.push(response.data);
                    }
                }

                setSummaries(Object.values(summariesData));
            } catch (error) {
                console.error("Error fetching summaries:", error);
            }
        };

        fetchSummaries();
    }, [floors]);

    useEffect(() => {
        updateState({ ...state, summaries: summaries });
    }, [summaries]);

    const getSummaryUrl = (componentType) => {
        const urlMappings = {
            wall: "http://localhost:8080/Models/Process/PartsOfConstructions/wall_process.php",
            tiebeam: "http://localhost:8080/Models/Process/PartsOfConstructions/Tiebeam_process.php",
            roof: "http://localhost:8080/Models/Process/PartsOfConstructions/roof_process.php",
            column: "http://localhost:8080/Models/Process/PartsOfConstructions/Columns_Process.php",
            beam: "http://localhost:8080/Models/Process/PartsOfConstructions/beam_process.php",
            slab: "http://localhost:8080/Models/Process/PartsOfConstructions/slab_process.php",
            door: "http://localhost:8080/Models/Process/PartsOfConstructions/door_process.php",
            window: "http://localhost:8080/Models/Process/PartsOfConstructions/window_process.php",
            stair: "http://localhost:8080/Models/Process/PartsOfConstructions/stairs-process.php",
            slab1: "http://localhost:8080/Models/Process/PartsOfConstructions/slab_process.php",
            slab2: "http://localhost:8080/Models/Process/PartsOfConstructions/slab_process.php",
            slab3: "http://localhost:8080/Models/Process/PartsOfConstructions/slab_process.php",
        };

        return urlMappings[componentType];
    };

    const [openedIds, setOpenedIds] = useState([]);

    function toggleAccordian(id) {
        if (openedIds.includes(id)) {
            setOpenedIds(openedIds.filter((item) => item !== id));
        } else {
            setOpenedIds([...openedIds, id]);
        }
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-24 my-8 ">
            {summaries.map((summary, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-md border-gray-200 border">
                    <h3 className="text-xl font-bold mb-2">{summary.type.toUpperCase()} SUMMARY</h3>
                    <ul>
                        {Object.entries(summary.summary).map(([key, value]) => (
                            key == "message" || key == 'status' || key == 'type' || key == 'unit') ? <></> :
                            <div key={key}>
                                {key !== "message" && (
                                    <li className="mb-1">
                                        <strong className="font-medium">
                                            {convertWordsToTitleCase(key.charAt(0).toUpperCase() + key.slice(1))}:
                                        </strong>{" "}
                                        {value}
                                    </li>
                                )}
                            </div>
                        )}
                    </ul>
                    <h4 className="text-lg font-bold mt-4">Components</h4>
                    <ul>
                        {summary.components.map((component, compIndex) => (
                            <li key={compIndex} className="p-1 px-2 border border-gray-300 rounded-lg my-1">
                                <h3 onClick={() => toggleAccordian(component.key)} className="my-2 rounded-md p-2 border-2 border-gray-300  cursor-pointer hover:bg-gray-50">{summary.type.toUpperCase()} {compIndex + 1}</h3>
                                {openedIds.includes(component.key) && Object.entries(component).map(([key, value]) => (
                                    (key == "message" || key == 'key' || key == 'type') ? <></> :
                                        <div key={key} className="px-2">
                                            <p className="mb-1 text-sm">
                                                <strong className="font-medium">
                                                    {convertWordsToTitleCase(key.charAt(0).toUpperCase() + key.slice(1))}:
                                                </strong>{" "}
                                                {value}
                                            </p>
                                        </div>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};