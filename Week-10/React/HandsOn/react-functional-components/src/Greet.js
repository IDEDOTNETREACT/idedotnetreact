const Greet = ({ name, coutry }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <h1>You are from {coutry}</h1>
            <p>This is a simple greeting component.</p>
        </div>
    );
};
export default Greet;