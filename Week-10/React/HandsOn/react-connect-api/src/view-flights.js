import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for making HTTP requests
function ViewFlights() {
    const [flights, setFlights] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5184/api/Flight/GetAllFlights') // Make a GET request to the API endpoint
            .then((response) => {
                console.log(response.data)  // Log the fetched flights
                setFlights(response.data) // Update the state with the fetched flights
            })
            .catch((error) => console.log(error)) // Log any errors

    }, []); // State to hold the fetched flights
    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Flight Id</th>
                        <th>Flight Name</th>
                        <th>Flight Code</th>
                        <th>Seats</th>

                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.flightId}>
                            <td>{flight.flightId}</td>
                            <td>{flight.flightName}</td>
                            <td>{flight.flightCode}</td>
                            <td>{flight.seats}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )



}
export default ViewFlights;