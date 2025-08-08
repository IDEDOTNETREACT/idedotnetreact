import { useRef } from 'react'
function Greet() {
    const nameRef = useRef('');
    const greet = (event) => {
        event.preventDefault();
        let name = nameRef.current.value;
        alert('Hello ' + name)
    }
    return (
        <>
            <form onSubmit={greet}>
                <table>
                    <tr>
                        <td>Enter Name</td>
                        <td>
                            <input type='text' ref={nameRef} />
                        </td>
                    </tr>
                    <tr>
                        <td colspan={2}>
                            <input type='submit' value='Greet'></input>
                        </td>
                    </tr>

                </table>
            </form>
        </>
    )
}
export default Greet;