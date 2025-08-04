import { useState } from 'react';
function Demo1() {
    const [name, setName] = useState('John Doe');
    const [age, setAge] = useState(30);
    //handleClick is the handle function
    //setName is the function to update the state
    const handleClick = () => {
        setName('Jane David');
        setAge(35);
    }
    return (
        <div>
            <h1>Welcome, {name}!</h1>
            <p>Your age is {age}.</p>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    )
}
export default Demo1