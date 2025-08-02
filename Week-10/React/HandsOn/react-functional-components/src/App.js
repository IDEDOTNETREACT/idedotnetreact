import logo from './logo.svg';
import './App.css';
import Greet from './Greet'; // Importing the Greet component
import Welcome from './Welcome'; // Importing the Welcome component
import BookList from './Book';
import Product from './Product'; // Importing the Product component
import Button from './Button'; // Importing the Button component
import UserCardList from './UserCard';
function App() {
  const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99,
  }
  const showAlert = () => {
    alert('Button clicked from App!');
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* use the Greet component */}
        {/* <Greet name="Sachin" coutry='Inida' />
        <Greet name='Polard' coutry='WestIndis' /> */}
        <Welcome name="John" />
        {/* <Welcome />
        
        <Welcome name="Jane" />
        <Welcome name="Doe" />
        <Welcome name="Alice" /> */}

        {/* <BookList book={book} /> */}
        {/* <Product name="Laptop" price={999.99} description="A high-performance laptop." />
         */}
        {/* <Button handleClick={showAlert} /> */}
        <UserCardList />
      </header>
    </div>
  );
}

export default App;
