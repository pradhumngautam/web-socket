import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setlatestMessage] = useState('');
  const [message, setmessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connection established');
      setSocket(socket)
     // newSocket.send('Hello Server!');
    }
    socket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setlatestMessage(message.data)
    }
    return () => {
      socket.close()
    }
   
  }, [])

  return (
    <>
      <input type='text' onChange={(e) => {
        setmessage(e.target.value)
      }} ></input>
      <button onClick={() => {
        socket.send(message);
      }}>send</button>
      {latestMessage}
    </>
  )
}

export default App