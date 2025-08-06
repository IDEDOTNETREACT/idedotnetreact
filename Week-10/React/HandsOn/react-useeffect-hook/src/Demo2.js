import React, { useState, useEffect } from 'react';
function Demo2() {
    const [count, setCount] = useState(0);
    //  useEffect(() => {
    //     console.log('Triggres when the state changes');
    // }); // This will trigger the useEffect every time the state changes.
    useEffect(() => {
        console.log('Triggres when the state changes');
    }, []); // This will trigger the useEffect only once when the component mounts.  
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Demo2;