function MailBox({ unreadMessages }) {
    return (
        <>
            <h1>Hello User!!</h1>
            {unreadMessages > 0 ? <p>You have {unreadMessages} unread messages.</p> : <p>MailBox Empty!!!</p>}
        </>
    )
}
export default MailBox; 