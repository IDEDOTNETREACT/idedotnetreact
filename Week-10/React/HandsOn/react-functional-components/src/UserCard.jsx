const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        width: '200px',
        margin: '10px auto',
    },
    avatar: {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
    },
}
function UserCard({ name, age, avatar }) {
    return (
        <div style={styles.card}>
            <img src={avatar} alt={`${name}'s avatar`} style={styles.avatar} />
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    )
}
function UserCardList() {
    return (
        <div>
            <UserCard
                name="John Doe"
                age={30}
                avatar="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <UserCard
                name="Jane Smith"
                age={25}
                avatar="https://randomuser.me/api/portraits/men/2.jpg"
            />
            <UserCard
                name="Alice Johnson"
                age={28}
                avatar="https://randomuser.me/api/portraits/men/3.jpg"
            />
            <UserCard
                name="Bob Brown"
                age={35}
                avatar="https://randomuser.me/api/portraits/men/4.jpg"
            />
        </div>
    );
}
export default UserCardList;