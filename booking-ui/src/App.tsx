import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BookingCalendar } from './Dashboard/BookingCalendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookingCalendar />
    </>
  )
}

export default App
