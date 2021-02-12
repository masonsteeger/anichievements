import React from 'react';
import { Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Achievement.css'


const Achivement = (props) => {
    let currentLevel = null
    console.log(props)

    if(props.genre === "Mahou Shoujo" || props.genre === "Horror"){
        switch(true){
            case props.count > 199:
                currentLevel = props.level4
                break;
            case props.count > 99:
                currentLevel = props.level3
                break;
            case props.count > 49:
                currentLevel = props.level2
                break;
            case props.count > 19:
                currentLevel = props.level1
                break;
            default:
                currentLevel = null
        }
    }else{
        switch(true){
            case props.count > 499:
                currentLevel = props.level4
                break;
            case props.count > 249:
                currentLevel = props.level3
                break;
            case props.count > 99:
                currentLevel = props.level2
                break;
            case props.count > 19:
                currentLevel = props.level1
                break;
            default:
                currentLevel = null

        }
    }

    if(currentLevel === null){
        return (
            <div className='achievement'>
                <h1>Watch more {props.genre} anime to unlock!!</h1>
                <h3>{props.count}</h3>
                <Progress value={props.count} total='20' progress='ratio' color='blue' size='big' active>Progress to next level</Progress>
            </div>
        )
    }else{
        return(
            <div className='achievement'>
                <div className='achievement-top'>
                    <div className='achievement-text'>
                        <h1>{currentLevel.title}</h1>
                        <h3>{currentLevel.subtitle}</h3>
                    </div>
                    <div className='achievement-icon'>
                        <img src={currentLevel.icon}/>
                    </div>
                </div>
                <Progress value={props.count} total={currentLevel.nextLevel} progress='ratio' color='blue' size='big' active>Progress to next level</Progress>
            </div>
        )
    }
}

export default Achivement;