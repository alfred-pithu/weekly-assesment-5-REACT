import { useState } from 'react'
import './App.css'
import Homepage from './assets/components/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage></Homepage>
    </>
  )
}

export default App
