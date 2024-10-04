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
    console.log("side effect")
    fetch("http://localhost:3000/messages")
    .then(res => res.json())
    .then(data => {console.log(data)
      setMessages(data);
    })
    .catch(e => setErrors(e))

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

  
  const transformMessages = useMemo(() => {
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
  
  }, [messageState]);

  console.log(messages,transformMessages())
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
