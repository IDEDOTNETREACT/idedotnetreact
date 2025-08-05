function Demo2() {
    let countries = ['USA', 'India', 'China', 'Japan', 'Germany'];
    return (
        <div>
            <h2>Countries List</h2>
            <ul>
                {countries.map((country) => (
                    <li>{country}</li>
                ))}
            </ul>
            < hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => (
                        <tr>
                            <td>{country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
export default Demo2;