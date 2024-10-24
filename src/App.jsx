/*global chrome*/
import { useReducer } from 'react'
import './App.css'
import List from './pages/Home/List'
import Navbar from './components/Navbar'
import { messageReducer } from './utils/Reducer';
import Search from './components/Search';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Preferences from './pages/Preferences/Preferences';
import Home from './pages/Home/Home';

function App() {
  // chrome.action.setBadgeText({ text: '' });
  console.log('badge removed successfully');
  const [messageState, messageDispatch] = useReducer(messageReducer, {
    sort:"",
    search:""
  });

  return (
    <>
      <div className='max-w-sm min-w-96 dark'>
        <BrowserRouter>
          <Navbar messageDispatch={messageDispatch}/>
          <Search messageDispatch={messageDispatch}/>
          <Home messageState={messageState} />
          <Routes>
            <Route path="/preferences" element={<Preferences/>} />
          </Routes>
        </BrowserRouter>
      </div>  
    </>
  )
}

export default App
