import { useState } from "react"

export default function () {
    const [count,setCount] = useState(0)
    const counterStyle = {
        border: '2px solid yellow'
    }
    const handleAddBtn = () =>{
        const  newCounter = count+1;
        setCount(newCounter)
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleAddBtn}>Add</button>
        </div>
    )
}