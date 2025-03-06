import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import { GameBoard } from './components/GameBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen flex flex-col items-center min-h-screen bg-blue-100'>
      <h1 className='text-3xl font-bold mt-2'>Pokemon Memory Game</h1>
      <GameBoard/>
    </div>
  )
}

export default App
