import React, { useState, useEffect } from 'react';
function Demo3() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Virat');

    useEffect(() => {
        console.log('Triggres when the state changes');
    }, [count]);// Triggered when count changes  
    const increment = () => {
        setCount(count + 1);
    }
    const changeName = () => {
        setName("Rohith");
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Name: {name}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}
export default Demo3;