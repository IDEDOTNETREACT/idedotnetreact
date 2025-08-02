function Button({ handleClick }) {
    const Click = () => {
        alert('Button clicked!');
    }
    return (
        <>
            <button className="btn" onClick={Click}>
                Click Me
            </button>
            <button className="btn" onClick={handleClick}>
                Click Me Again
            </button>
        </>
    );
}
export default Button;