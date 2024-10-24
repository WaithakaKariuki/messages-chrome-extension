import React from 'react'
import Navbar from './Navbar'
import Toggle from './Toggle'
import ReadAllMessages from './ReadAllMessages'

function Preferences({toggleDarkMode, darkMode}) {
  return (
    <div>
        <Navbar/> 
        <Toggle toggleDarkMode = {toggleDarkMode} darkMode = {darkMode} />   
        <ReadAllMessages/> 
    </div>
  )
}

export default Preferences
