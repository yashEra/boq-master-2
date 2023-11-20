import React, { useEffect } from "react";

const FinalSummary = ({ props }) => {
  useEffect(() => {
    console.log(props);
  }, [props]);

  const renderTable = () => {
    if (!props || !props.summaries || props.summaries.length === 0) {
      return <p>No data available</p>;
    }


    const wallSummary = props.summaries.find((summary) => summary.type === "wall");
    const tiebeamSummary = props.summaries.find((summary) => summary.type === "tiebeam");
    const stairSummary = props.summaries.find((summary) => summary.type === "stair");
    const columnSummary = props.summaries.find((summary) => summary.type === "column");
    const slabSummary = props.summaries.find((summary) => summary.type === "slab");
    const footingsSummary = props.summaries.find((summary) => summary.type === "footings");
    const fountationSummary = props.summaries.find((summary) => summary.type === "fountation");

    //"wall" summary
    const walldes = wallSummary
      ? wallSummary.summary.description
      : 0;
    const wallQuantity = wallSummary
      ? wallSummary.summary.area
      : 0;
    const wallRate = wallSummary
      ? wallSummary.summary.unitRate
      : 0;
    const wallAmount = wallSummary
      ? wallSummary.summary.cost
      : 0;
    const wallfAmount = wallSummary
      ? wallSummary.summary.wallFinishingCost
      : 0;

    //"Slabs" summary
    const slabdes = slabSummary
      ? slabSummary.summary.descriptionC
      : 0;
    const slabQuantity = slabSummary
      ? slabSummary.summary.volume
      : 0;
    const slabRate = slabSummary
      ? slabSummary.summary.unitC
      : 0;
    const slabAmount = slabSummary
      ? slabSummary.summary.cCost
      : 0;
    const slabfdes = slabSummary
      ? slabSummary.summary.descriptionF
      : 0;
    const slabfQuantity = slabSummary
      ? slabSummary.summary.area
      : 0;
    const slabfRate = slabSummary
      ? slabSummary.summary.unitF
      : 0;
    const slabfAmount = slabSummary
      ? slabSummary.summary.fCost
      : 0;

    //"tiebeam" summary
    const tiebeamCementQuantity = tiebeamSummary
      ? tiebeamSummary.summary.cement
      : 0;
    const tiebeamSandQuantity = tiebeamSummary
      ? tiebeamSummary.summary.sand
      : 0;


    //"stair" summary
    const stairConcrete = stairSummary
      ? stairSummary.summary.concrete
      : 0;
    const stairReinforcement = stairSummary
      ? stairSummary.summary.reinforcement
      : 0;
    const stairFormwork = stairSummary
      ? stairSummary.summary.formworks
      : 0;
    const stairConcreteQT = stairSummary
      ? stairSummary.summary.concreteQuantity
      : 0;
    const stairReinforcementQT = stairSummary
      ? stairSummary.summary.reinforcementQuantity
      : 0;
    const stairFormworkQT = stairSummary
      ? stairSummary.summary.formworksQuantity
      : 0;
    const stairConcreteU = stairSummary
      ? stairSummary.summary.concreteUnitPrice
      : 0;
    const stairReinforcementU = stairSummary
      ? stairSummary.summary.reinforcementUnitPrice
      : 0;
    const stairFormworkU = stairSummary
      ? stairSummary.summary.formworksUnitPrice
      : 0;


    // "Column Footing" summary
    const footingsConcrete = footingsSummary
      ? footingsSummary.summary.concrete
      : 0;
    const footingsReinforcement = footingsSummary
      ? footingsSummary.summary.reinforcement
      : 0;
    const footingsFormwork = footingsSummary
      ? footingsSummary.summary.formworks
      : 0;
    const footingsConcreteQT = footingsSummary
      ? footingsSummary.summary.concreteQuantity
      : 0;
    const footingsReinforcementQT = footingsSummary
      ? footingsSummary.summary.reinforcementQuantity
      : 0;
    const footingsFormworkQT = footingsSummary
      ? footingsSummary.summary.formworksQuantity
      : 0;
    const footingsConcreteU = footingsSummary
      ? footingsSummary.summary.concreteUnitPrice
      : 0;
    const footingsReinforcementU = footingsSummary
      ? footingsSummary.summary.reinforcementUnitPrice
      : 0;
    const footingsFormworkU = footingsSummary
      ? footingsSummary.summary.formworksUnitPrice
      : 0;
 
      // "Columns" summary
    const columnConcrete = columnSummary
      ? columnSummary.summary.concrete
      : 0;
    const columnReinforcement = columnSummary
      ? columnSummary.summary.reinforcement
      : 0;
    const columnFormwork = columnSummary
      ? columnSummary.summary.formworks
      : 0;
    const columnConcreteQT = columnSummary
      ? columnSummary.summary.concreteQuantity
      : 0;
    const columnReinforcementQT = columnSummary
      ? columnSummary.summary.reinforcementQuantity
      : 0;
    const columnFormworkQT = columnSummary
      ? columnSummary.summary.formworksQuantity
      : 0;
    const columnConcreteU = columnSummary
      ? columnSummary.summary.concreteUnitPrice
      : 0;
    const columnReinforcementU = columnSummary
      ? columnSummary.summary.reinforcementUnitPrice
      : 0;
    const columnFormworkU = columnSummary
      ? columnSummary.summary.formworksUnitPrice
      : 0;


    return (
      <div className="w-3/4 md:w-full">
        {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
        <table className="mx-auto min-w-3/4 table-auto">
          <thead>
            <tr>
              <th className="px-4 py-4">Description</th>
              <th className="px-4 py-2">Unit</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Rate</th>
              <th className="px-4 py-2">Amount-SL-Rs.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Rate shall include for lifting, handling, wetting, all<br />
                rough and fair cuttings, plumbing, reveals, rough<br />
                arches, raking out all joints for pointing plastering,<br />
                cutting chases, making good at the completion <br /><br />
              </td>
              <td className="border px-4 py-2">note</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">{walldes}</td>
              <td className="border px-4 py-2">Sq.m</td>
              <td className="border px-4 py-2">{wallQuantity}</td>
              <td className="border px-4 py-2">{wallRate}</td>
              <td className="border px-4 py-2">{wallAmount}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Rate shall include for all temporary rules screed, <br />
                ground etc. for raking out joints of new brick work<br />
                or backing new concrete for key internal and <br />
                coved angles joints between new and old  <br />plastering arises inter sections between curved or <br />
                irregular surface etc.,.. and all making good <br />
                around pipes sanitary fittings and similar fixtures. <br /><br />
              </td>
              <td className="border px-4 py-2">note</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">WALL FINISHES (All Floors)</td>
              <td className="border px-4 py-2">Sq.m</td>
              <td className="border px-4 py-2">{wallQuantity}</td>
              <td className="border px-4 py-2">100</td>
              <td className="border px-4 py-2">{wallfAmount}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 px-4 py-2">TOTAL FOR WALL SUMMARY</th>
              <th className="border px-4 py-2 "></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2">{wallAmount}</th>
            </tr>
            <tr className="">
              <th className="border px-4 py-2 px-4 py-2">All Slabs</th>
              <th className="border px-4 py-2 ">Note</th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
            </tr>
            <tr>
              <td className="border px-4 py-2">{slabdes}</td>
              <td className="border px-4 py-2">Cu.m</td>
              <td className="border px-4 py-2">{slabQuantity}</td>
              <td className="border px-4 py-2">{slabRate}</td>
              <td className="border px-4 py-2">{slabAmount}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">{slabfdes}</td>
              <td className="border px-4 py-2">Sq.m</td>
              <td className="border px-4 py-2">{slabfQuantity}</td>
              <td className="border px-4 py-2">{slabfRate}</td>
              <td className="border px-4 py-2">{slabfAmount}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">{slabfdes}</td>
              <td className="border px-4 py-2">Sq.m</td>
              <td className="border px-4 py-2">{slabfQuantity}</td>
              <td className="border px-4 py-2">{slabfRate}</td>
              <td className="border px-4 py-2">{slabfAmount}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2 px-4 py-2">STAIRS</th>
              <th className="border px-4 py-2 "></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
            </tr>
            <tr>
              <td className="border px-4 py-2"> High yield Tor Steel reinforcement bars & <br />Mild Steel Bars in
                the following.
              </td>
              <td className="border px-4 py-2">Note</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2"> Stair steps waist and landings </td>
              <td className="border px-4 py-2">Cu.m</td>
              <td className="border px-4 py-2">{stairConcreteQT}</td>
              <td className="border px-4 py-2">{stairConcreteU}</td>
              <td className="border px-4 py-2">{stairConcrete}</td>
            </tr>

              <tr>
                <td className="border px-4 py-2"> Rainforcement </td>
                <td className="border px-4 py-2">Sq.m</td>
                <td className="border px-4 py-2">{stairReinforcementQT}</td>
                <td className="border px-4 py-2">{stairReinforcementU}</td>
                <td className="border px-4 py-2">{stairReinforcement}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2"> Form Work</td>
                <td className="border px-4 py-2">Sq.m</td>
                <td className="border px-4 py-2">{stairFormworkQT}</td>
                <td className="border px-4 py-2">{stairFormworkU}</td>
                <td className="border px-4 py-2">{stairFormwork}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2 px-4 py-2">TOTAL FOR WALL SUMMARY</th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2">{stairConcrete+stairReinforcement+stairFormwork}</th>
            </tr>
            <tr>
              <th className="border px-4 py-2 px-4 py-2">COLUMN FOOTINGS</th>
              <th className="border px-4 py-2 "></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
            </tr>
            <tr>
              <td className="border px-4 py-2"> High yield Tor Steel reinforcement bars & <br />Mild Steel Bars in
                the following.
              </td>
              <td className="border px-4 py-2">Note</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2"> Concrete </td>
              <td className="border px-4 py-2">Cu.m</td>
              <td className="border px-4 py-2">{footingsConcreteQT}</td>
              <td className="border px-4 py-2">{footingsConcreteU}</td>
              <td className="border px-4 py-2">{footingsConcrete}</td>
            </tr>

              <tr>
                <td className="border px-4 py-2"> Rainforcement </td>
                <td className="border px-4 py-2">Sq.m</td>
                <td className="border px-4 py-2">{footingsReinforcementQT}</td>
                <td className="border px-4 py-2">{footingsReinforcementU}</td>
                <td className="border px-4 py-2">{footingsReinforcement}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2"> Form Work</td>
                <td className="border px-4 py-2">Sq.m</td>
                <td className="border px-4 py-2">{footingsFormworkQT}</td>
                <td className="border px-4 py-2">{footingsFormworkU}</td>
                <td className="border px-4 py-2">{footingsFormwork}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2 px-4 py-2">TOTAL FOR WALL SUMMARY</th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2">{footingsConcrete+footingsReinforcement+footingsFormwork}</th>
            </tr>
            <tr>
              <th className="border px-4 py-2 px-4 py-2">COLUMNS</th>
              <th className="border px-4 py-2 "></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
              <th className="border px-4 py-2 px-4 py-2"></th>
            </tr>
            <tr>
              <td className="border px-4 py-2"> High yield Tor Steel reinforcement bars & <br />Mild Steel Bars in
                the following.
              </td>
              <td className="border px-4 py-2">Note</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2"> Concrete </td>
              <td className="border px-4 py-2">Cu.m</td>
              <td className="border px-4 py-2">{columnConcreteQT}</td>
              <td className="border px-4 py-2">{columnConcreteU}</td>
              <td className="border px-4 py-2">{columnConcrete}</td>
            </tr>

              <tr>
                <td className="border px-4 py-2"> Rainforcement </td>
                <td className="border px-4 py-2">Sq.m</td>
                <td className="border px-4 py-2">{columnReinforcementQT}</td>
                <td className="border px-4 py-2">{columnReinforcementU}</td>
                <td className="border px-4 py-2">{columnReinforcement}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2"> Form Work</td>
                <td className="border px-4 py-2">Sq.m</td>
                <td className="border px-4 py-2">{columnFormworkQT}</td>
                <td className="border px-4 py-2">{columnFormworkU}</td>
                <td className="border px-4 py-2">{columnFormwork}</td>
              </tr>
              <tr>
              <th className="border px-4 py-2 px-4 py-2">TOTAL FOR WALL SUMMARY</th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2"></th>
              <th className="border px-4 py-2">{columnConcrete+columnReinforcement+columnFormwork}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return <div>{renderTable()}</div>;
};

export default FinalSummary;
