/*global chrome*/
import { useEffect, useReducer, useState } from 'react'
import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'
import { messageReducer } from './utils/Reducer';

function App() {
  const [messages, setMessages] = useState([])

  const [messageState, messageDispatch] = useReducer(messageReducer, {
    sort:false,
  });

  
  useEffect(() => {
    console.log("side effect")
    fetch("http://localhost:3000/messages")
    .then(res => res.json())
    .then(data => {console.log(data)
      setMessages(data);
    })

    chrome.storage.local.get(
      messages && messages.map((message) => message.id),
      (result) => {
        const prevMessages = messages.map((message) => ({
          ...message,
          value: result[message.id] || "",
        }));

        setMessages(prevMessages);
      }
    );
  },[])

  // console.log(messages)
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
  console.log(messages,transformMessages())
  return (
    <>
      <div className='max-w-sm min-w-96'>
        <Navbar messageDispatch={messageDispatch} messageState={messageState} />
        <List messages={transformMessages()}/>
      </div>
      
    </>
  )
}

export default App




// chrome.storage.local.get(
//   messages.map((message) => message.id),
//   (result) => {
//     const prevMessages = messages.map((message) => ({
//       ...message,
//       id: result[message.id] || "",
//     }));

//     setMessages(prevMessages);
//   }
// );
// },[])