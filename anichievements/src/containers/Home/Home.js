import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Achievement from '../Achievement/Achievement';


import action1 from '../../icons/action-1.png';
import action2 from '../../icons/action-2.png';
import action3 from '../../icons/action-3.png';
import action4 from '../../icons/action-4.png';
import comedy1 from '../../icons/comedy-1.png';
import comedy2 from '../../icons/comedy-2.png';
import comedy3 from '../../icons/comedy-3.png';
import comedy4 from '../../icons/comedy-4.png';
import horror1 from '../../icons/horror-1.png';
import horror2 from '../../icons/horror-2.png';
import horror3 from '../../icons/horror-3.png';
import horror4 from '../../icons/horror-4.png';
import mahou1 from '../../icons/mahou-shoujo-1.png';
import mahou2 from '../../icons/mahou-shoujo-2.png';
import mahou3 from '../../icons/mahou-shoujo-3.png';
import mahou4 from '../../icons/mahou-shoujo-4.png';
import mecha1 from '../../icons/mecha-1.png';
import mecha2 from '../../icons/mecha-2.png';
import mecha3 from '../../icons/mecha-3.png';
import mecha4 from '../../icons/mecha-4.png';
import psych1 from '../../icons/psych-1.png';
import psych2 from '../../icons/psych-2.png';
import psych3 from '../../icons/psych-3.png';
import psych4 from '../../icons/psych-4.png';
import rom1 from '../../icons/rom-1.png';
import rom2 from '../../icons/rom-2.png';
import rom3 from '../../icons/rom-3.png';
import rom4 from '../../icons/rom-4.png';
import sol1 from '../../icons/sol-1.png';
import sol2 from '../../icons/sol-2.png';
import sol3 from '../../icons/sol-3.png';
import sol4 from '../../icons/sol-4.png';
import sports1 from '../../icons/sports-1.png';
import sports2 from '../../icons/sports-2.png';
import sports3 from '../../icons/sports-3.png';
import sports4 from '../../icons/sports-4.png';

const GET_LISTS = gql`
    query($id:Int) {
        MediaListCollection(userId: $id, type:ANIME){
            lists{
                name
                isCustomList
                status
                entries{
                    media{
                        genres
                        title{
                            userPreferred
                        }
                    }
                }
            }
        }
    }
`



const Home = (props) => {

    const {loading, error, data} = useQuery(GET_LISTS, {
        variables:{
            id: sessionStorage.getItem('id')
        }
    })

    useEffect(() => {
        

    }, [props.user])

    const onRemoveId = () => {
        sessionStorage.removeItem('id')
        props.setUser(null)
    }

    if(loading) return <p>Loading... DO NOT REFRESH PAGE</p>
    if(error) return <p>Error! {error.message}</p>

   
    if(data) return(
        <div>
            {console.log(props.user)}
            <h1>Home Page for {props.user.name}</h1>
            <h2>Stats</h2>
            <h3>Minutes Watched: {props.user.statistics.anime.minutesWatched}</h3>
            <h3>Episodes Watched: {props.user.statistics.anime.episodesWatched}</h3>
            {props.user.statistics.anime.genres.map(genre => {
                let achievement = null
                switch(true){
                    case genre.genre === "Action":
                        achievement = 
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'LINK START', subtitle:'You\'ve watched at least 20 action anime! Be careful on your journey and remember if you die in the game you die in real life', icon: action1, nextLevel: 100}}
                                level2={{title:'FRESH MEAT', subtitle:'Watched at least 100 action anime! You have trained hard and can finally join the Scouts to avenge your mom\'s death', icon: action2, nextLevel: 250}}
                                level3={{title: 'RETURN BY DEATH', subtitle:'Wow! 250 action anime?? You\'ve seen a whole lot... and died a whole lot... why do you keep coming back and no one else remembers what happened??', icon: action3, nextLevel: 500}}
                                level4={{title: 'HUMAN AGAIN', subtitle:'You\'ve done it! Over 500 action anime!! You\'re brother\'s body is back in tact and all is at peace in the world... or is it??', icon: action4}}
                             />
                        break;
                    case genre.genre === "Comedy":
                        achievement =
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'TRANSFER STUDENT', subtitle:'With 20 comedies under your belt and plenty more on the way, you\'re well on your way to being the star at your new school', icon: comedy1, nextLevel: 100}}
                                level2={{title:'GOAT HUNTER', subtitle:'100 comedy anime watched, and you NEVER let Kojirou steal your doujin', icon: comedy2, nextLevel: 250}}
                                level3={{title: 'JOKE HARVESTER', subtitle:'Incredible! 250 comedy watched!! The jokes are spilling out of your brain like... cabbages in the sky?', icon: comedy3, nextLevel: 500}}
                                level4={{title: 'COMEDY DICTIONARY', subtitle:'Over 500 comedy anime watched and you always catch the reference', icon: comedy4}}
                             />
                        break;
                    case genre.genre === "Horror":
                        achievement =
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'QUICK BUT PAINFUL', subtitle:'These 20 horror anime you\'ve seen may have gone by quick but you\'ll never run with an umbrella ever again', icon: horror1, nextLevel: 50}}
                                level2={{title:'FLESH EATER', subtitle:'With 50 horror anime watched you begin to salivate at the thought of human flesh', icon: horror2, nextLevel: 100}}
                                level3={{title:'YOU CAN RUN BUT YOU CAN\'T HIDE', subtitle:'100 horror anime down and you can feel something pursuing you... is that a kid??', icon: horror3, nextLevel: 200}}
                                level4={{title: 'FEARLESS', subtitle:'Over 200 horror anime watched. You\'ve seen the the spine-chilling, the blood-curdling, and the terrible Junji Ito Collection adaptation probably', icon: horror4}}
                             />
                        break;
                    case genre.genre === "Mahou Shoujo":
                        achievement = 
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'CONTRACT: SIGNED', subtitle:'With 20 or more mahou shoujo anime watched, you\'ve officially signed your contract and are now a magical girl!', icon: mahou1, nextLevel: 50}}
                                level2={{title:'FIRST TRANSFORMATION', subtitle:'At least 50 mahou shoujo anime watched! You\'ve mastered your transformation and are ready to fight evil where ever it may be!', icon: mahou2, nextLevel: 100}}
                                level3={{title: 'CARD COLLECTOR', subtitle:'Wow! 100 mahou shoujo anime watched! You\'ve collected a whole lot and are a force to be reckoned with. EVIL DOERS BEWARE', icon: mahou3, nextLevel: 200}}
                                level4={{title: 'QUEEN SERINITY', subtitle:'Okay... 200 mahou shoujo anime... that\'s like more than half in existence... do you feel accomplished now? You\'re the ruler of the moon and earth now I guess', icon: mahou4}}
                             />
                        break;
                    case genre.genre === "Mecha":
                        achievement = 
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'PEIRCE THE HEAVENS', subtitle:'20 mecha anime later and you have pierced the heavens with your drill! The only way to go now is up!!', icon: mecha1, nextLevel: 100}}
                                level2={{title:'GET IN THE ROBOT!!', subtitle:'You\'ve finally decided to stop being a crybaby and got in the rob- I mean watched at least 100 mecha anime', icon: mecha2, nextLevel: 250}}
                                level3={{title: 'GEASS GRANTED', subtitle:'250 or more mecha anime and you\'ve finally been granted the power you\'ve been waiting for', icon: mecha3, nextLevel: 500}}
                                level4={{title: 'MECHA MANIAC', subtitle:'500 mecha anime later and you\'re the best pilot in the universe! No one can stop you or your giant robot', icon: mecha4}}
                             />
                        break;
                    case genre.genre === "Sports":
                        achievement = 
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'NEW TO THE TEAM', subtitle:'You\'ve watched at least 20 sports anime, and you\'re starting to get the hang of it... senpai is still dissapointed though', icon: sports1, nextLevel: 100}}
                                level2={{title:'SHARPENED BLADES', subtitle:'Watched at least 100 sports anime! With blades as sharp as yours, your opponents are quivering in their skates', icon: sports2, nextLevel: 250}}
                                level3={{title: 'REGIONAL FINALIST', subtitle:'You\'ve fought hard and made it to the the regionals with 250 sports anime watched! Keep working hard and aim for nationals next year!!', icon: sports3, nextLevel: 500}}
                                level4={{title: 'NATIONAL CHAMPION', subtitle:'With the 500 sports anime you\'ve watched you are crowned the best in Japan!! All schools bow to you and your team. Keep it up and defend your title next year!', icon: sports4}}
                             />
                        break;
                    case genre.genre === "Romance":
                        achievement = 
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'DOKI DOKI', subtitle:'Your heart starts to flutter with these 20 romance anime watched... the next move is up to you', icon: rom1, nextLevel: 100}}
                                level2={{title:'AFTER-SCHOOL MEETING', subtitle:'After 100 romance anime you\'ve poured out your heart and soul into this letter... hopefully senpai will notice you now', icon: rom2, nextLevel: 250}}
                                level3={{title: 'TSUNDERE', subtitle:'250 romance anime watched! I-it\'s not like you like the genre or anything BAKA!!', icon: rom3, nextLevel: 500}}
                                level4={{title: 'TILL DEATH DO US PART', subtitle:'You\'ve loved and you\'ve lost with these 500 romance anime watched. Even if death comes your love will be eternal.', icon: rom4}}
                             />
                        break;
                    case genre.genre === "Slice of Life":
                        achievement = 
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'EASY-GOING', subtitle:'20 Slice of Life anime down and you are already realizing how comfy this genre really is', icon: sol1, nextLevel: 100}}
                                level2={{title:'NEW HIRE', subtitle:'Thank goodness you have a dragon maid to take care of all your chores or else you wouldn\'t have been able to watch 100 Slice of Life anime!', icon: sol2, nextLevel: 250}}
                                level3={{title:'CUTE GIRLS + CUTE THINGS', subtitle:'250 Slice of Life anime and your nose has just started bleeding from the cuteness', icon: sol3, nextLevel: 500}}
                                level4={{title:'HOKAGO TEA TIME', subtitle:'With 500 Slice of Life anime down you\'re ready to tour the world... but why do that when you can have a cup of tea in the club room instead?', icon: sol4}}
                             />
                        break;
                    case genre.genre === "Psychological":
                        achievement =
                            <Achievement
                                genre={genre.genre}
                                count={genre.count}
                                level1={{title:'MINOR CONFUSION', subtitle:'You\'ve seen at least 20 psychological anime. Your brain has started to hurt a little but you\'re pretty confident you\'ll make it out alive', icon: psych1, nextLevel: 100}}
                                level2={{title:'MIND WARPED', subtitle:'With 100 psychological anime consumed by your mind, you\'re certain that things are\'nt always the way it seems...', icon: psych2, nextLevel: 250}}
                                level3={{title:'MIND FLAYED', subtitle:'250 psychological anime... you\'re either brave or insane at this point... you should think about stopping now maybe... but there\'s probably some of monogatari you haven\'t seen yet', icon: psych3, nextLevel: 500}}
                                level4={{title:'MIND F*#^ED', subtitle:'You\'ve watched over 500 psychological anime and your mind may or may no longer be in tact... please don\'t kill me...', icon: psych4}}
                             />
                        break;
                    default:
                        achievement = null
                        break;
                }
                return achievement

            })}

            <button onClick={() => onRemoveId()}>Sign Out</button>
            {console.log(data)}
        </div>
    )
}

export default Home;