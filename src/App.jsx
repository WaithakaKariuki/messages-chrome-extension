/*global chrome*/
import './App.css'
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Preferences from './pages/Preferences/Preferences';
import Home from './pages/Home/Home';
import { useEffect, useState } from 'react';

function App() {
  // chrome.action.setBadgeText({ text: '' });
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((darkMode)=>!darkMode) 
  }
  
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className='max-w-sm min-w-96'>
          <BrowserRouter>
            <Routes>
              <Route path="/preferences" element={<Preferences toggleDarkMode={toggleDarkMode} darkMode = {darkMode} />} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </BrowserRouter>
        </div> 
      </div> 
    </>
  )
}

export default App
