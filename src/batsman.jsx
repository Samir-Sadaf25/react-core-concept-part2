import { useState } from "react"

export default function batsman()
{
    let [runs,setRuns] = useState(0);
    const handleSingle =()=>{
        const updateRuns = runs+1;
        setRuns(updateRuns);
    }
    const handleFour = ()=>{
        const updateRuns = runs+4
        setRuns(updateRuns)
    }
    const handleSix = ()=>{
        const updateRuns = runs+6;
        setRuns(updateRuns);
    }
    return(
    <div>
        <h3>player : Bangla batsman</h3>
        {
            runs > 50 && <p>congrats! Half century</p>
        }
        <h1>score: {runs}</h1>
        <button onClick={handleSingle}>single</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>six</button>
    </div>
   )
}