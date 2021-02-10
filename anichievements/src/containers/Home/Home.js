import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

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
            id: localStorage.getItem('id')
        }
    })

    useEffect(() => {


    }, [props.user])

    const onRemoveId = () => {
        localStorage.removeItem('id')
        props.setUser({})
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
            {props.user.statistics.anime.genres.map((genre) => {
                return(
                    <div>
                        <p>{genre.genre}: {genre.count}</p>
                    </div>
                )
            })}
            <button onClick={() => onRemoveId()}>Sign Out</button>
            {console.log(data)}
        </div>
    )
}

export default Home;