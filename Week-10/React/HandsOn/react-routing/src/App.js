import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';
import NoPage from './NoPage';
function App() {
  return (
    <div className="App">
      <h1>React Router Demo</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
          <Route path='*' elemenet={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
