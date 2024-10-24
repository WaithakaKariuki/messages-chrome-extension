/*global chrome*/
import { useReducer } from 'react'
import './App.css'
import List from './pages/Home/List'
import Navbar from './components/Navbar'
import { messageReducer } from './utils/Reducer';
import Search from './components/Search';

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
        <Navbar messageDispatch={messageDispatch}/>
        <Search messageDispatch={messageDispatch}/>
        <List messageState={messageState} />
      </div>  
    </>
  )
}

export default App
