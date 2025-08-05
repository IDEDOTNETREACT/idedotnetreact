import { useState } from "react";
function Demo2() {
    const [items, setItems] = useState([
        { name: 'Item 1', price: 100 },
        { name: 'Item 2', price: 200 },
        { name: 'Item 3', price: 300 },
        { name: 'Item 4', price: 400 },
    ]);
    const [item, setItem] = useState({ name: '', price: '' });
    const save = (e) => {
        setItems([...items, item]); // Add new item to the items array
        setItem({ name: '', price: '' }); // Reset form fields
        e.preventDefault(); // Prevent form submission
    }
    return (
        <form onSubmit={save}>
            <div className="container">
                <table border={1} className="table table-bordered" style={{ width: '500px', padding: '10px' }}>
                    <tr>
                        <td>Enter Name</td>
                        <td>
                            <input type='text' value={item.name} className="form-control"
                                onChange={(e) => setItem((prevObject) => ({ ...prevObject, name: e.target.value }))} />
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Price</td>
                        <td>
                            <input type='text' value={item.price} className="form-control"
                                onChange={(e) => setItem((prevObject) => ({ ...prevObject, price: e.target.value }))} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit" className="btn btn-primary">Add Item</button>
                        </td>
                    </tr>
                </table>
                <hr />

                <table border={1} className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </form>
    )
}
export default Demo2;