import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
 
function App() {
  const [length, setLength] = useState(5)
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [spCharAllowed, setSpCharAllowed] = useState(false)
  const [buttonBg, setButtonBg] = useState('#0284c7')
  const [newButtonBg, setNewButtonBg] = useState('#0284c7')

  const passRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(spCharAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, numberAllowed, spCharAllowed])

  const copyPassToClipBoard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, spCharAllowed, passwordGenerator])



  return (
    <>
      <div className='flex flex-col items-center w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-600'>
        <h1 className='text-white text-center text-3xl my-6'>Password Generator</h1>
        <div className='flex shadow-lg rounded-lg overflow-hidden bg-white w-full mb-8'>
          <input
          type="text"
          value={password}
          className='w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button className='bg-sky-600 text-white p-3 outline-none shrink-0 cursor-pointer'
          style={{backgroundColor: buttonBg}}
          onClick={() => {
            copyPassToClipBoard();
            setButtonBg('#0369a1'); 
            setTimeout(() => {
              setButtonBg('#0284c7');
            }, 150);
          }}
          >
            copy
          </button>
        </div>
        <div className='flex text-sm mb-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={5}
            max={50}
            value={length}
            className='cursor-grab'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='text-white ml-2'>Length: {length}</label>
            <div className='flex items-center gap-x-1 mx-5'>
              <input type="checkbox" 
              id="numberInput"
              defaultChecked = {numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => (!prev))
              }}
               />
               <label className='text-white'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
              id="spCharInput"
              defaultChecked = {spCharAllowed}
              onChange={() => {
                setSpCharAllowed((prev) => (!prev))
              }}
              />
              <label htmlFor="spCharInput" className='text-white'>Special Characters</label>
              <div className='flex items-center gap-x-1 ml-3'>
                <button className='bg-sky-600 text-white p-3 outline-none shrink-0 cursor-pointer rounded-lg'
                style={{backgroundColor: newButtonBg}}
                onClick={() => {
                  passwordGenerator();
                  setNewButtonBg('#0369a1'); 
                  setTimeout(() => {
                  setNewButtonBg('#0284c7');
                  }, 150);
                }}
                >Re-Generate
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
