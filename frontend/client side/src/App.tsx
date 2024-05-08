import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setlatestMessage] = useState('');

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
     // newSocket.send('Hello Server!');
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setlatestMessage(message.data)
    }
    setSocket(newSocket);
    return () => newSocket.close();
  }, [])

  return (
    <>
      hi there
      {latestMessage}
    </>
  )
}

export default App