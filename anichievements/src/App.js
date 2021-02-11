import React, {useEffect, useState} from 'react';
import Username from './containers/Username/Username'
import Home from './containers/Home/Home'
import './App.css';


const App = () => {

  window.onload = function(){
    if(sessionStorage.getItem("id")){
        sessionStorage.clear();
        console.log(sessionStorage.id)
    }
  }
  
  const [newUser, setUser] = useState(null)

  useEffect(() => {

  }, [newUser])

  return (
      <div className="App">
        <h1>Anichievements</h1>
        {newUser ? <Home user={newUser} setUser={setUser}/> : <Username setUser={setUser}/>}
      </div>

  );
}

export default App;
