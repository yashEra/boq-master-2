import PickMeals from "./../Assets/pick-meals-image.png";

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

export default SelectBuildingType;