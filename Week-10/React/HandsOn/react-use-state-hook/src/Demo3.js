import { useState } from "react"
function Demo3() {
    const [color, setColor] = useState("red")
    //handler function to change color
    const changeColor = () => {
        if (color === "red")
            setColor("green")
        else if (color === "green")
            setColor("yellow")
        else
            setColor("blue")
    }
    return (
        <>
            <h1 style={{ color: color }}>This is a {color} heading</h1>
            <button onClick={changeColor}>Change to Blue</button>
        </>
    )
}
export default Demo3