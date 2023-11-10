import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PickMeals from "./../Assets/pick-meals-image.png";
import { DeleteForeverOutlined } from '@mui/icons-material'
import ColumnView from "../columns/ColumnView";
import WallView from "../walls/WallView";
import {getFromLocalStorage} from '../../services/localstorage'
import SavedItems from "../../components/SavedItems";
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
            components:[]
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


    return (
        <>
            <NavBar />
            <div className="pt-24"></div>
            <div className="border-2 py-2 border-gray-300 flex flex-wrap justify-evenly">
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
            </div>
            <div className="mx-auto">
                {state.selectedStep === 0 && <SelectBuildingType state={state} setState={setState} />}
                {state.selectedStep === 1 && <AddFloors state={state} setState={setState} />}
                {state.selectedStep === 2 && <AddComponents state={state} setState={setState} />}
                {state.selectedStep === 3 && <DemoWidget state={state} />}
            </div>
            <Footer />
        </>
    );
}

function DemoWidget({ state }) {
    return <pre><h1>Sal</h1>{JSON.stringify(state)}</pre>;
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
        console.log(state.steps)
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
            components:[]
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
    const [floor,setFloor] = useState(0)
    async function onClick(floorid) {
        const walls= await getFromLocalStorage('wall')
        console.log(walls)
        const floors = [...state.floors];
        floors[floorid].components.push(walls)
        setState({ ...state, floors: floors });
        setShowModel(false)
    }
    return (
        <>
            <h2 className="text-center text-2xl m-8">Now lets add components to your {state.buildingType}</h2>
            <div className="mx-auto max-w-xl m-2">
                {state.floors.map((floor) => (
                    <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                        <div>
                            <h2 className="font-bold text-xl">Floor {floor.id}</h2>
                            <p className="text-sm -mt-2">{floor.name}</p>
                        </div>
                        {/* grid */}
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                                <div>
                                    <h2 className="font-bold text-xl">Walls {floor.components.count}</h2>
                                    <SavedItems type={'wall'}/>
                                    <button onClick={() => {
                                        setShowModel(true);
                                        setFloor(floor.id-1)
                                    }} className="text-indigo-500 my-2">Add Wall</button>
                                </div>
                            </div>
                            <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                                <div>
                                    <h2 className="font-bold text-xl">Doors</h2>
                                    <p className="text-sm -mt-2">Doors</p>
                                </div>
                            </div>
                            <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                                <div>
                                    <h2 className="font-bold text-xl">Windows</h2>
                                    <p className="text-sm -mt-2">Windows</p>
                                </div>
                            </div>
                            <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                                <div>
                                    <h2 className="font-bold text-xl">Roof</h2>
                                    <p className="text-sm -mt-2">Roof</p>
                                </div>
                            </div>
                            <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                                <div>
                                    <h2 className="font-bold text-xl">Stairs</h2>
                                    <p className="text-sm -mt-2">Stairs</p>
                                </div>
                            </div>
                            <div className="border-2 border-gray-400 px-8 py-3 text-center rounded-lg mb-2">
                                <div>
                                    <h2 className="font-bold text-xl">Balcony</h2>
                                    <p className="text-sm -mt-2">Balcony</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showModel &&
                <div className="top-0 left-0 right-0 absolute z-50">
                    {/* done button tool bar */}
                    <div className="flex justify-center mt-44 bg-white w-full">
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 my-2 mb-4 px-4 rounded-2xl" onClick={() => onClick(floor)}>
                            Done
                        </button>
                    </div>
                    <WallView />
                </div>}
        </>
    );
}