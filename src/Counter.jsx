import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const add = () =>{
        setCount(count + 1)
    }
    const reduces = () =>{
        setCount(count - 1)
    }
    return (
        <div style={{border: '2px solid blue', marginBottom: '10px', borderRadius:'10px'}}>
            <h3>Counter: {count}</h3>
            <button className="styles1" onClick={add}>add</button>
            <button className="styles1" onClick={reduces}>reduces</button>
        </div>
    );
};

export default Counter;