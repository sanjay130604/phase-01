import { useState } from 'react'
// import Task1App from './Task1App'
// import Task2App from './Task2App'
import Task3App from './Task3App'
// import Task4App from './Task4App'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Task1App /> */}
      {/* <Task2App /> */}
      <Task3App />
      {/* <Task4App /> */}
    </>
  )
}

export default App
