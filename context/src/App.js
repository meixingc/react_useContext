import logo from './logo.svg';
import './App.css';
import { UserContext } from './components/UserContext';
import Home from './components/Home';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [info, setInfo] = useState({
    username: '',
    lastLogIn: ''
  })
  return (
    <div className="App">
      <UserContext.Provider value={{info, setInfo}}>
        <Header />
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
