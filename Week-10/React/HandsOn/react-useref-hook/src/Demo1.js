import { useRef } from 'react';
function Demo1() {
    //create a ref object using the useRef hook
    const inputRef = useRef('Good Morning!');
    const changeRef = () => {
        //update the ref object's current value
        inputRef.current = 'Good Evening!';
        alert(inputRef.current); //display the updated value in an alert box
    }
    return (
        <>
            <h1>{inputRef.current}</h1>
            <button onClick={changeRef}>Click</button>
        </>
    );
}
export default Demo1;