import React, { useEffect } from 'react';
function Demo1() {
    //useEffect Hook to log a message when the component mounts
    useEffect(() => {
        console.log('Hello World from the useEffect Hook!');
    });
    return (
        <>
            <h1>This is the Demo of UseEffect</h1>
        </>
    )
}
export default Demo1