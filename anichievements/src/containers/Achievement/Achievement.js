import React from 'react';
import { Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Achievement.css'


const Achivement = (props) => {
    let currentLevel = null
    console.log(props)

    if(props.type === 'genre'){
        if(props.title === "Mahou Shoujo" || props.title === "Horror"){
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
    }else{
        if(props.type === 'days'){
            switch(true){
                case props.count > 364:
                    currentLevel = props.level4
                    break
                case props.count > 31:
                    currentLevel = props.level3
                    break;
                case props.count > 7:
                    currentLevel = props.level2
                    break;
                case props.count > 1:
                    currentLevel = props.level1
                    break;
                default:
                    break;
            }
        }
        if(props.type === 'dropped'){
            return (
                <div className='achievement'>
                    <h1>ENDURANCE AWARD</h1>
                    <h3>You've watched over 20 anime and dropped 0!</h3>
                    <Progress size='big' total='100' value='100' success></Progress>
                </div>
            )
        }
        if(props.type === 'episodes'){
            switch(true){
                case props.count > 99999:
                    currentLevel = props.level4
                    break
                case props.count > 9999:
                    currentLevel = props.level3
                    break;
                case props.count > 999:
                    currentLevel = props.level2
                    break;
                case props.count > 99:
                    currentLevel = props.level1
                    break;
                default:
                    break;
            }
        }
        if(props.type === 'completed'){
            switch(true){
                case props.count > 4999:
                    currentLevel = props.level4
                    break
                case props.count > 999:
                    currentLevel = props.level3
                    break;
                case props.count > 499:
                    currentLevel = props.level2
                    break;
                case props.count > 99:
                    currentLevel = props.level1
                    break;
                default:
                    break;
            }
        }
    }


    if(currentLevel === null){
        return (
            <div className='achievement'>
                <h1>{props.type === 'genre' ? `Watch more ${props.title} anime to unlock!!` : `Add more ${props.title} to unlock!!`}</h1>
                <Progress value={props.count} total={props.type === 'genre' ? 20 : props.type === 'days' ? 1 : 100} progress='ratio' color='blue' size='big' active>Progress to first level</Progress>
            </div>
        )
    }else{
        return(
            <div className='achievement'>
                <h1>{props.title.toUpperCase()} LEVEL {currentLevel.level}</h1>
                <div className='achievement-top'>
                    <div className='achievement-text'>
                        <h2>{currentLevel.title}</h2>
                        <h3>{currentLevel.subtitle}</h3>
                    </div>
                    <div className='achievement-icon'>
                        <img src={currentLevel.icon}/>
                    </div>
                </div>
                {currentLevel === props.level4 ? 
                    <div className='progress-bar'><Progress value={props.count} progress='value' total={props.count} size='big' success></Progress><h4>Congrats!! You've achieved the highest {props.title} level!!</h4></div> : props.type === 'genre' ?
                    <div className='progress-bar'><Progress value={props.count} total={currentLevel.nextLevel} progress='ratio' color='blue' size='big' active></Progress> <h4>Watch {currentLevel.nextLevel - props.count} more {props.title.toLowerCase()} anime to unlock level {currentLevel.level+1}!</h4></div> : 
                    <div className='progress-bar'><Progress value={props.count} total={currentLevel.nextLevel} progress='ratio' color='blue' size='big' active></Progress> <h4>Add {currentLevel.nextLevel - props.count} more {props.title} to unlock level {currentLevel.level+1}!</h4></div>}
            </div>
        )
    }
}

export default Achivement;