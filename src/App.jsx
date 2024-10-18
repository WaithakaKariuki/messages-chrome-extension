/*global chrome*/
import { useReducer } from 'react'
import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'
import { messageReducer } from './utils/Reducer';
import Search from './components/Search';
import notification from './assets/notification.mp3'

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'playSound') {
    // Play the notification sound when requested by the background script
    const audio = new Audio(chrome.runtime.getURL(`${notification}`));
    audio.play().then(() => {
      console.log('Notification sound played successfully');
    }).catch((error) => {
      console.error('Error playing notification sound:', error);
    });
  }
});

function App() {
  chrome.action.setBadgeText({ text: '' });
  console.log('badge removed successfully');
  const [messageState, messageDispatch] = useReducer(messageReducer, {
    sort:"",
    search:""
  });

  return (
    <>
      <div className='max-w-sm min-w-96'>
        <Navbar messageDispatch={messageDispatch}/>
        <Search messageDispatch={messageDispatch}/>
        <List messageState={messageState} />
      </div>  
    </>
  )
}

export default App
