import { useEffect, useState } from "react";

function Useffect ()
{
    const [Count,setCount]=useState(0);
    const [calculation, setcalculation]= useState(0);

    useEffect(()=>{
        setcalculation(() => Count * 2);
    },[Count]); // <- add the count variable here
    return(
        <div>
            <p>count: {Count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>calculation: {calculation}</p>
        </div>
    );
}
export default Useffect;
