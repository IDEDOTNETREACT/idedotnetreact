import { useState } from "react";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const validate = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "12345") {
            setMessage("Login Successful!");
        } else {
            setMessage("Invalid Credentials!");
        }
    }
    return (
        <form onSubmit={validate}>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                </tr>
                <tr>
                    <td colSpan={2}><input type="submit" value="Submit" /></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <span>{message}</span>
                    </td>
                </tr>
            </table>

        </form >
    )
}
export default Login;