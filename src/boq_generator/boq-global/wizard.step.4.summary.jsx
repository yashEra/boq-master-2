import { useState, useEffect } from "react";
import { convertWordsToTitleCase } from "../../services/utils";
import axios from "axios";


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
            foundation: "http://localhost:8080/Models/Process/PartsOfConstructions/foundation_process.php",
            footings: "http://localhost:8080/Models/Process/PartsOfConstructions/columnFootings_process.php",
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

export default SummaryComponent;