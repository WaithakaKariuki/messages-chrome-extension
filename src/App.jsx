/*global chrome*/
import { Suspense, useEffect, useMemo, useReducer, useState } from 'react'
import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'
import { messageReducer } from './utils/Reducer';
import Loading from './components/Loading';

function App() {
  const [messages, setMessages] = useState([])
  const [errors, setErrors] = useState([])

  const [messageState, messageDispatch] = useReducer(messageReducer, {
    sort:false,
  });


  useEffect(() => {
    const fetchDataAndStore = async () => {
      try {
        // Check if chrome.storage.local is available
        if (typeof chrome === "undefined" || !chrome.storage || !chrome.storage.local) {
          throw new Error('chrome.storage.local is not available in this context.');
        }
        
        chrome.storage.local.get("apiData", (result) => {
          setMessages(result.apiData);  // Update React state
        });
  
        // Fetch data from API
        const response = await fetch("http://localhost:3000/messages");
        const data = await response.json();
  
        // Save data to chrome.storage.local
        await chrome.storage.local.set({ "apiData": data });
        console.log('Data saved to chrome.storage:', data);
  
        // Retrieve data from chrome.storage.local
        chrome.storage.local.get("apiData", (result) => {
          const updatedMessages = data.map((message) => ({
            ...message,
            value: result[message.id] || "",  // Use value from storage if available
          }));
          setMessages(updatedMessages);  // Update React state
        });
      } catch (error) {
        console.error('Error fetching or saving data:', error);
        setErrors(error);
      }
    };
  
    fetchDataAndStore();
  }, []);

  
  const transformMessages = useMemo(() => 
    ()=>{
    let sortedMessages = messages;
  
    if (messageState.sort === "priority") {
      sortedMessages
       = sortedMessages
      .filter((message) =>
        message.priority === "high"
      );
    }

    if (messageState.sort  === "default") {
      sortedMessages
       = sortedMessages
      .sort((a, b) =>
         b.id - a.id
      );
    }

    if (messageState.sort  === "unread") {
      sortedMessages
       = sortedMessages
      .filter((message) =>
        message.read === "false"
      );
    }
    return sortedMessages
  
  }, [messages,messageState]);

  return (
    <>
      <div className='max-w-sm min-w-96'>
        <Navbar messageDispatch={messageDispatch} messageState={messageState} />
        <Suspense fallback={<Loading />}>
          <List messages={transformMessages()} errors={errors} />
        </Suspense>
      </div>
      
    </>
  )
}

export default App
