import { useState } from 'react';
function Demo1() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const submit = (e) => {
        setMessage(`Hello ${name}`);
        e.preventDefault(); // Prevent the default form submission behavior 
        console.log(message);
    }
    return (
        <form onSubmit={submit}>
            <table border={1}>
                <tr>
                    <td>Enter Name</td>
                    <td>
                        <input type="text" name="name" required
                            onChange={(e) => setName(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <input type="submit" value="Submit" />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <span>{message}</span>
                    </td>
                </tr>
            </table>
        </form>
    )
}
export default Demo1;