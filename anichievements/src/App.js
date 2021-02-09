import React, {useEffect, useState} from 'react';
import Username from './containers/Username/Username'
import Home from './containers/Home/Home'
import './App.css';


const App = () => {
  
  const [newUser, setUser] = useState('true')

  useEffect(() => {
    
  }, [newUser])

  return (
      <div className="App">
        <h1>Anichievements</h1>
        {localStorage.id ? <Home setUser={setUser}/> : <Username setUser={setUser}/>}
      </div>

  );
}

export default App;
