import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client'


const GET_USER = gql`
  query($name:String){
    User(name: $name){
      id
      name
      statistics{
        anime{
          minutesWatched
          episodesWatched
          genres{
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
                  <form>
                    <input type='text' value={input} onChange={(e) => onChangeHandler(e)}/>
                    <button type='submit' onClick={() =>onSubmitHandler()}>Log In!</button>
                  </form>
                </div>
            }
        </div>
    )
}

export default Username;