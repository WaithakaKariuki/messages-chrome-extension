/*global chrome*/
import { useEffect, useReducer, useState } from 'react'
import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'
import { messageReducer } from './utils/Reducer';

function App() {
  const [messageState, messageDispatch] = useReducer(messageReducer, {
    sort:false,
  });

  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/messages")
    .then(res => res.json())
    .then(data => {setMessages(data);
      localStorage.setItem("messages", JSON.stringify(data))
    })

    chrome.storage.local.get(
      messages.map((message) => message.id),
      (result) => {
        const prevFormFields = messages.map((message) => ({
          ...message,
          value: result[message.id] || "",
        }));

        setMessages(prevFormFields);
      }
    );
  },[])

  console.log(messages)
  const transformMessages = () => {
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
  }
  
  return (
    <>
      <div className='max-w-sm min-w-96'>
        <Navbar messageDispatch={messageDispatch}/>
        <List messages={transformMessages}/>
      </div>
      
    </>
  )
}

export default App
