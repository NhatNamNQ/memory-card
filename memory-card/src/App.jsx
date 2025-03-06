import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { GameBoard } from './components/GameBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GameBoard/>
    </>
  )
}

export default App
