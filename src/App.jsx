import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Employee from './components/Employee'

// import Signup from './components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Signup/> */}
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/e' element={<Employee/>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
