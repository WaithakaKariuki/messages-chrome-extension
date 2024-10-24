import React from 'react'
import Navbar from './Navbar'
import Toggle from './Toggle'
import ReadAllMessages from './ReadAllMessages'

function Preferences({toggleDarkMode, enabled}) {
  return (
    <div>
        <Navbar/> 
        <Toggle toggleDarkMode = {toggleDarkMode} enabled = {enabled} />   
        <ReadAllMessages/> 
    </div>
  )
}

export default Preferences
