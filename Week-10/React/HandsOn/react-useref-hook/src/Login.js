import { useRef, useState } from "react";
function Login() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
 
    const [err, setErr] = useState('');
    const validate = (event) => {
        event.preventDefault();//prevent form submission
        const email = emailRef.current.value; //access email textbox value
        const password = passwordRef.current.value;
        let item={email:email,password:password}
        if (email === "admin" && password === "admin123") {
            setErr('Valid user')
           

        }
        else {
            setErr('Invalid user');
        }
    }

    return (
        <form onSubmit={validate}>
            <table>
                <tr>
                    <td>Email</td>
                    <td>
                        <input type="text" ref={emailRef} />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input type="password" ref={passwordRef} />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type='submit' value="Submit" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <span>{err}</span>
                    </td>
                </tr>
            </table>
        </form>
    )
}
export default Login;