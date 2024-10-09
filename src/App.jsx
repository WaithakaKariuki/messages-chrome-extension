/*global chrome*/
import { useReducer } from 'react'
import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'
import { messageReducer } from './utils/Reducer';
import Search from './components/Search';

let apiData 
chrome.storage.local.get("apiData", (result) => {
  apiData = (result.apiData);  // Chrome storage data
}); 

function App() {
  chrome.action.setBadgeText({ text: '' });
  const [messageState, messageDispatch] = useReducer(messageReducer, {
    sort:"",
    search:""
  });

  return (
    <>
      <div className='max-w-sm min-w-96'>
        <Navbar messageDispatch={messageDispatch}/>
        <Search messageDispatch={messageDispatch}/>
          <List messageState={messageState} apiData={apiData} />
      </div>  
    </>
  )
}

export default App
