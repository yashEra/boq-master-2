import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

import FinalSummary from "./final_summary";
import SelectBuildingType from "./wizard.step.1.type";
import AddFloors from "./wizard.step.2.floors";
import AddComponents from "./wizard.step.3.comps";
import SummaryComponent from "./wizard.step.4.summary";

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

    useEffect(()=>{
        console.log(state)
    },[state])

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