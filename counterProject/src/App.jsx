import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  let [counter, setcounter] = useState(0)
  const addValue = () => {
    if(counter <= 19) {
      setcounter(counter + 1)
    }
    else console.log("counter should be less than 20!")
  }
  
  const removeValue = () => {
    if(counter >= 1){
      setcounter(counter - 1)
    }
    else console.log("counter should be more than 0!")
  }

  return (
    <>
     <h1 className='text-9xl text-purple-400 mb-5'>counter = {counter}</h1>
     <button className='bg-cyan-300 rounded-md p-1 px-2 mr-5 text-black' onClick={addValue}>increment {counter}</button>
     <button className='bg-cyan-300 rounded-md p-1 px-2  text-black' onClick={removeValue}>decrement {counter}</button>
     <div className='flex justify-around items-center mt-5'>
        <Card title="Air Force 1s" cardTxt="Nike Air Force 1s"/>
        <Card title="Air Jordans"  />
     </div>
    </>
  )
}

export default App
