import { DeleteForeverOutlined } from '@mui/icons-material'

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

export default AddFloors;