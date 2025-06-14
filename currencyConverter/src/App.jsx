import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(currencyInfo[to] * amount)
  }

  return (
    <>
     <div className='flex flex-wrap justify-center items-center bg-cover bg-no-repeat h-screen w-full' 
     style={{
      backgroundImage: `url('https://i.pinimg.com/736x/13/41/45/13414519583c03a8576b45d6171c11c9.jpg')`,
      backgroundPosition: 'center'
     }}
     >

    <div className='w-full'>
      <div className='flex flex-col justify-center items-center w-full max-w-lg mx-auto border border-gray-100 rounded-lg p-5 backdrop-blur-xs bg-white/20 min-h-fit'>
      <h1 className='text-2xl mb-5 text-black'>Currency Converter</h1>
        <form onSubmit={
          (e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-2'>
              <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className='relative w-full'>
              <button
              type='button'
              className='absolute cursor-pointer left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-700 text-white px-2 py-0.5'
              onClick={swap}
              >swap
              </button>
            </div>

            <div className='w-full'>
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisable
              />
            </div>

            <button type='submit' className='cursor-pointer w-full mt-5 bg-blue-700 text-white px-4 py-2 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
