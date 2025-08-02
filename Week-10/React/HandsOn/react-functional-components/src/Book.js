function Book({ title, author, price }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Price: ${price}</p>
        </div>
    );
}
function BookList(props) {

    return (
        <div>
            <Book title="The Great Gatsby" author="F. Scott Fitzgerald" price={10.99} />
            <Book title="1984" author="George Orwell" price={8.99} />
            <Book title="To Kill a Mockingbird" author="Harper Lee" price={12.99} />
            <Book tilte={props.book.title} author={props.book.author} price={props.book.price} />
        </div>
    )
}
export default BookList;