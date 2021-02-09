import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client'
import { printIntrospectionSchema } from 'graphql';


const GET_USER = gql`
  query($name:String){
    User(name: $name){
      id
      name
    }
  }`


const Username = (props) => {

    const [input, setInput] = useState('');
    
    const [getUser, {loading, data}] = useLazyQuery(GET_USER)

    const onChangeHandler = (e) => {
      e.preventDefault()
      setInput(e.target.value)

    }

    const onSubmitHandler = () => {
      getUser({variables:{name: input}})
    }


    if (loading) return <p>Loading...</p>
    if (data) localStorage.setItem('id', data.User.id)

    return(
        <div>
            {
                data ? props.setUser('true'): 
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