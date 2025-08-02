import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting />
        <Greeting name="John" />
        <Greeting name="Jane" />
        <Greeting name="Doe" /> */}
        <Counter />

      </header>
    </div>
  );
}

export default App;
