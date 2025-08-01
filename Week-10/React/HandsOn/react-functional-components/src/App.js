import logo from './logo.svg';
import './App.css';
import Greet from './Greet'; // Importing the Greet component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* use the Greet component */}
        <Greet name="Sachin" coutry='Inida' />
        <Greet name='Polard' coutry='WestIndis' />
      </header>
    </div>
  );
}

export default App;
