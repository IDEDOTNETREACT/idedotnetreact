import { useState } from "react";
import axios from "axios";
function AddFlight() {
    const [flightCode, setFlightCode] = useState("");
    const [flightName, setFlightName] = useState("");
    const [seats, setSeats] = useState(0);
    const AddFlight = (e) => {
        e.preventDefault();// Prevent form submission
        // Add flight logic here
        let flight = {
            'flightCode': flightCode,
            'flightName': flightName,
            'seats': seats
        }
        console.log(flight);
        axios.post('http://localhost:5184/api/Flight/AddFligh', flight)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        //reset the form
        setFlightCode('')
        setFlightName('')
        setSeats(0);
    }
    return (
        <div>
            <form onSubmit={AddFlight}>
                <table>
                    <tr>
                        <td>FlightName</td>
                        <td>
                            <input type="text" value={flightName} onChange={(e) => setFlightName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>FlightCode</td>
                        <td>
                            <input type="text" value={flightCode} onChange={(e) => setFlightCode(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Seats</td>
                        <td>
                            <input type="number" value={seats} onChange={(e) => setSeats(Number(e.target.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" value="Add Flight" className="btn btn-primary" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
export default AddFlight;