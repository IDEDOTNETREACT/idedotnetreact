const Ex4 = () => {
    const x = 4;
    const IsStudent = true;
    let message = "Hello World";
    if (x > 4) {
        message = "x is greater than 4";
        console.log(message);
    }
    else {
        message = "x is less than or equal to 4";
        console.log(message);
    }
    return (
        <div>

            <p>{message}</p>
            <h2>{IsStudent ? 'Student' : 'Employee'}</h2>
        </div>
    );

}
export default Ex4;