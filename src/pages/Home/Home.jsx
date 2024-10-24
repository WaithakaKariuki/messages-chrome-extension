import React from 'react'
import List from './List'
import Navbar from './Navbar'
import Search from './Search'

function Home({messageState, messageDispatch}) {
  return (
    <>
        <Navbar messageDispatch={messageDispatch}/>
        <Search messageDispatch={messageDispatch}/>
        <List messageState={messageState}/>
    </>
  )
}

export default Home
