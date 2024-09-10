import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/Login/Login'
import SignupForm from '@components/SignupForm/SignupForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignupForm/>
    </>
  )
}

export default App
