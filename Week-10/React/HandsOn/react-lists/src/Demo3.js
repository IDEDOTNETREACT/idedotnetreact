function Demo3() {
    //array of employee objects
    const employees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', position: 'Project Manager' },
        { id: 3, name: 'Michael Johnson', position: 'Senior Software Engineer' },
        { id: 4, name: 'Sarah Davis', position: 'Junior Software Engineer' },
        { id: 5, name: 'David Wilson', position: 'Senior Project Manager' }
    ]
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}> {/* Using key prop for each row */}
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Demo3;