import React from 'react';
import spinner from '../../icons/spinner.gif'
import './Spinner.css';

const Spinner = () => {
    return(
        <div>
            <img src={spinner} alt='spinner'/>
            <h3>LOADING... PLEASE DON'T REFRESH</h3>
        </div>
    )
}

export default Spinner