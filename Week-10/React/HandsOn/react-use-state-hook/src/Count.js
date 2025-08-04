import { useState } from 'react';
function Count({ counter = 5 }) {

    const [count, setCount] = useState(counter);
    // Functions to increment and decrement the count
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Count;