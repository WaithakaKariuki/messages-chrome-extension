/*global chrome*/
import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import Navbar from './components/Navbar'

function App() {

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
  
  return (
    <>
      <div className='max-w-sm min-w-96'>
        <Navbar/>
        <List messages={messages}/>
      </div>
      
    </>
  )
}

export default App
