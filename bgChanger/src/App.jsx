import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <div className='w-full h-screen duration-100'
    style={{backgroundColor: color}}>
      <h2 className='text-white p-5 bg-amber-600 shadow-2xl mb-5 rounded-3xl mx-48'>onClick method always expects a function inside it and not the return value of a function.</h2>
      <div className='flex justify-center gap-3 items-center bg-gray-400 rounded-4xl mx-5'>
        <button onClick={() => setColor("red")} className='bg-red-500 m-5 text-white rounded-lg w-16'>Red</button>
        <button onClick={() => setColor("olive")} className='bg-[#808000] text-white m-5 rounded-lg w-16'>Olive</button>
        <button onClick={() => setColor("black")} className='bg-black text-white m-5 rounded-lg w-16'>Black</button>
        <button onClick={() => setColor("blue")} className='bg-blue-700 text-white m-5 rounded-lg w-16'>Blue</button>
        <button onClick={() => setColor("cyan")} className='bg-cyan-300 m-5 rounded-lg w-16'>Cyan</button>
      </div>
    </div>
  )
}

export default App
