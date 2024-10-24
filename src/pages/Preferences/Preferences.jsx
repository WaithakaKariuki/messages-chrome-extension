import React from 'react'
import Navbar from './Navbar'
import Toggle from './Toggle'
import ReadAllMessages from './ReadAllMessages'

function Preferences({toggleDarkMode}) {
  return (
    <div>
        <Navbar/> 
        <Toggle toggleDarkMode = {toggleDarkMode}/>   
        <ReadAllMessages/> 
    </div>
  )
}

export default Preferences
