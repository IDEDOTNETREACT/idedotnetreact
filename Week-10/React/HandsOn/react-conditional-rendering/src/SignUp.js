function UserLogin() {
    return (
        <div>
            <h1>Welcome User</h1>
            <p>Pleasecontinue.</p>
        </div>
    );
}
function GuestLogin() {
    return (
        <div>
            <h1>Welcome Guest</h1>
            <p>Please sign up to continue.</p>
        </div>
    );
}
function SignUp({ isLoggedIn }) {
    // Conditional rendering based on isLoggedIn prop
    // If isLoggedIn is true, render UserLogin component
    if (isLoggedIn) {
        return <UserLogin />;
    } else {
        return <GuestLogin />;
    }
}

export default SignUp