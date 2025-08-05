import React, { useState } from 'react';
function Demo4() {
    const [countries, setCountries] = useState([
        "India",
        "USA",
        "China"
    ]);
    const [country, setCountry] = useState("");
    //handler function to change country
    const changeCountry = () => {
        setCountries([...countries, country]); // Add the new country to the list

    }
    return (
        <div>
            <h1>Countries List</h1>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>{country}</li>
                ))}
            </ul>
            <hr />
            <div>
                Enter a new country:
                <input type="text" id="newCountry" value={country}
                    onChange={(e) => setCountry(e.target.value)} />
                <button onClick={changeCountry}> Add Country </button>

            </div>
        </div>
    )
}
export default Demo4;