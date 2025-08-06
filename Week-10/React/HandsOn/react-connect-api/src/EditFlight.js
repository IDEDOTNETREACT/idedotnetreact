import { useState } from "react";
import axios from "axios";
function EditFlight() {
    const [flightId, setFlightId] = useState(0);  // Assuming flightId is passed as a prop to this component
    const [flightCode, setFlightCode] = useState("");
    const [flightName, setFlightName] = useState("");
    const [seats, setSeats] = useState(0);
    const SearchFlight = () => {
        let Id = flightId;
        axios.get('http://localhost:5184/api/Flight/GetFlightById/' + Id)
            .then((response) => {
                console.log(response.data)  // Log the fetched flight details
                setFlightCode(response.data.flightCode);
                setFlightName(response.data.flightName);
                setSeats(response.data.seats);

            })
    }
    const EditFlight = (e) => {
        e.preventDefault();// Prevent form submission
        // Edit flight logic here
        let flight = {
            'flightId': flightId,
            'flightCode': flightCode,
            'flightName': flightName,
            'seats': seats
        }
        console.log(flight);
        // Update flight using the updated flight object
        // Make an API call to update the flight
        // Assuming the API call is successful, setFlightCode, flightName, and seats to their updated values
        axios.put('http://localhost:5184/api/Flight/UpdateFlight', flight)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error)) // Log any errors

    }
    const DeleteFlight = () => {
        // Delete flight logic here
        let Id = flightId;
        axios.delete('http://localhost:5184/api/Flight/DeleteFlight?id=' + Id)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error)) // Log any errors
    }
    return (
        <div>
            <form onSubmit={EditFlight}>
                <table>
                    <tr>
                        <td>flightId</td>
                        <td>
                            <input type="text" value={flightId} onChange={(e) => setFlightId(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={SearchFlight}>Search Flight</button>
                        </td>
                    </tr>
                    <tr>
                        <td>FlightName</td>
                        <td>
                            <input type="text" value={flightName} onChange={(e) => setFlightName(e.target.value)} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>FlightCode</td>
                        <td>
                            <input type="text" value={flightCode} onChange={(e) => setFlightCode(e.target.value)} readOnly />
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
                            <input type="submit" value="Edit Flight" className="btn btn-primary" />
                            <button onClick={DeleteFlight} className="btn btn-danger">Delete Flight</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
export default EditFlight;