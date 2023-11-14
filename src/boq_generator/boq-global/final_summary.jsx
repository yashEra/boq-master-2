import { useEffect } from "react";

export default function FinalSummary({props}) {
    useEffect(() => {
        console.log(props)
    },[props])

    return (
        <div>
            <pre>{JSON.stringify(props,null,4)}</pre>
        </div>
    )
}