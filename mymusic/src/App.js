import logo from './logo.svg';
import './App.css';
import Home from './screens/home';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState("");
  
  return (
    <div className="App">
   <Home />
    </div>
  );
}

export default App;
