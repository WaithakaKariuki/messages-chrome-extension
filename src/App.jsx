/*global chrome*/
import { Suspense, useReducer } from 'react'
import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'
import { messageReducer } from './utils/Reducer';
import Loading from './components/Loading';

let apiData 
chrome.storage.local.get("apiData", (result) => {
  apiData = (result.apiData);  // Chrome storage data
}); 

function App() {
  chrome.action.setBadgeText({ text: '' });
  const [messageState, messageDispatch] = useReducer(messageReducer, {
    sort:"",
  });

  return (
    <>
      <div className='max-w-sm min-w-96'>
        <Navbar messageDispatch={messageDispatch} messageState={messageState} />
        <Suspense fallback={<Loading />}>
          <List messageState={messageState} apiData={apiData} />
        </Suspense>
      </div>  
    </>
  )
}

export default App
