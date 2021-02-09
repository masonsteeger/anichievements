import React, { useEffect } from 'react';


const Home = (props) => {

    const onRemoveId = () => {
        localStorage.removeItem('id')
        props.setUser('false')
    }
   
    return(
        <div>
            <h1>Home Page for {localStorage.getItem('id')}</h1>
            <button onClick={() => onRemoveId()}>Sign Out</button>
        </div>
    )
}

export default Home;