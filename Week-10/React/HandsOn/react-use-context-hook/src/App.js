import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { ThemeContext } from './ThemeContext';
import { Profiler, useState } from 'react';
import Child2 from './Child2';
import { UserContext } from './UserContext';
import Profile from './Profile';

function App() {
  const [theme, setTheme] = useState('green');
  const user = { name: 'Alice', role: 'Admin' }
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Profile />
      </UserContext.Provider>
      <ThemeContext.Provider value={theme}>
        <div>
          <button onClick={() => setTheme(theme === 'green' ? 'red' : 'green')}>
            Toggle Theme</button>
          <Child />
          <Child2 />
        </div>

      </ThemeContext.Provider>
    </div>
  );
}

export default App;
