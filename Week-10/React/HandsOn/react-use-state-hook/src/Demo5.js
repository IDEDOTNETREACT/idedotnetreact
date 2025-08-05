import { useState } from "react";
function Demo5() {
    //declare the object state using useState hook
    const [item, setItem] = useState({
        id: 1,
        name: "Apple",
        price: 5,
        quantity: 10
    });
    //handler function to update quantity
    //prevState is the current state object
    const updateObject = () => {
        setItem((prevState) => ({
            ...prevState, // Spread the previous state
            price: 10, // Update the price to 10
            quantity: 50 // Update the quantity to 5
        })); // Update the item object
    }
    return (
        <div className="container">
            <h1>Item Details</h1>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={updateObject}>Update Price</button>
        </div>
    )
}
export default Demo5;
