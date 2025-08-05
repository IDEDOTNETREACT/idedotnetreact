function Student({ id, name, age, grade }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{grade}</td>
        </tr>
    );

}
function Class() {
    // Array of student objects
    const students = [
        { id: 1, name: 'Alice', age: 20, grade: 'A' },
        { id: 2, name: 'Bob', age: 22, grade: 'B' },
        { id: 3, name: 'Charlie', age: 21, grade: 'C' },
        { id: 4, name: 'David', age: 23, grade: 'A' },
        { id: 5, name: 'Eve', age: 20, grade: 'B' }
    ];
    return (
        <div className="container">
            <table border={1} className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <Student id={student.id}
                            name={student.name}
                            age={student.age}
                            grade={student.grade} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Class;