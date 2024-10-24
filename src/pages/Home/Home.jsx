import React, { useReducer } from 'react'
import List from './List'
import Navbar from './Navbar'
import Search from './Search'
import { messageReducer } from '../../utils/Reducer';

function Home() {
    const [messageState, messageDispatch] = useReducer(messageReducer, {
        sort:"",
        search:""
      });
  return (
    <>
        <Navbar messageDispatch={messageDispatch}/>
        <Search messageDispatch={messageDispatch}/>
        <List messageState={messageState}/>
    </>
  )
}

export default Home
