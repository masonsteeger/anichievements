import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client'

import './Username.css'


const GET_USER = gql`
  query($name:String){
    User(name: $name){
      id
      name
      statistics{
        anime{
          minutesWatched
          episodesWatched
          genres(sort: PROGRESS_DESC){
            genre
            count
          }
        }
      }
    }
  }`


const Username = (props) => {

    const [input, setInput] = useState('');
    
    const [getUser, {loading, error, data}] = useLazyQuery(GET_USER)

    const onChangeHandler = (e) => {
      e.preventDefault()
      setInput(e.target.value)

    }

    const onSubmitHandler = () => {
      getUser({variables:{name: input}})
    }


    if (loading) return <p>Loading... DO NOT REFRESH PAGE</p>
    if(error) return <p>Error! {error.message}</p>
    if (data) sessionStorage.setItem('id', data.User.id)

    return(
        <div>
            {
                data ? props.setUser(data.User): 
                <div>
                  <h2>Enter Your AniList Username below:</h2>
                  <form>
                    <input type='text' value={input} onChange={(e) => onChangeHandler(e)}/>
                    <br/>
                    <button type='submit' onClick={() =>onSubmitHandler()}>GET ACHIEVEMENTS!</button>
                  </form>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <hr />
                  <div className='explanation'>
                    <h2>Anichievements is a project by Mason Steeger inspired by MALGraph that is an extenstion of your AniList profile. Unfortunately since MAL has restricted the use of their API, the achievements I wished to complete on MALGraph are no longer up to date, so I decided to make an achievement list myself!</h2>
                    <h2>In order to use this website you need to have an AniList profile (which you can create <a target="_blank" rel="noreferrer" href='https://anilist.co/signup'>here</a>) and some anime in your completed list! Once you have that, just type your username in the input box and you'll see your achievements!</h2>
                    <h2>Any questions, comments, concerns, or suggestions can be addressed to <a href="mailto:masonsteeger@gmail.com">Mason Steeger</a> via this email with the subject reading "Anichievements".</h2>
                    <h2>Happy Watching!</h2>
                  </div>
                </div>
            }
        </div>
    )
}

export default Username;